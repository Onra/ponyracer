var commandLineArgs = require('command-line-args');
var childProcess = require('child_process');
var fs = require('fs');
var request = require('request');
var prompt = require('prompt');
var chalk = require('chalk');
var rimraf = require('rimraf');

var cli = commandLineArgs([
  {name: 'local', alias: 'l', type: Boolean},
  {name: 'exercise', type: String}
]);

var options = cli.parse();
var result = {};

test();

function exec(command, success, error) {
  childProcess.exec(command, function (err, out) {
    if (err) {
      if (error) {
        error(err);
      }
      else {
        throw err;
      }
    } else {
      success(out);
    }
  });
}

function readFile(file, success, error) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      if (error) {
        error(err);
      }
      else {
        throw err;
      }
    } else {
      success(data);
    }
  });
}

function handleKarmaResult(data) {
  var results = JSON.parse(data);
  result.karma = {success: results.summary.success, failed: results.summary.failed};
  if (result.karma.failed) {
    var percent = 100 - result.karma.failed * 5;
    console.log(chalk.yellow('Unit tests score: ' + percent + '%'));
    console.log(chalk.yellow('Looks like you have ' + result.karma.failed + ' unit test(s) failing.'));
    console.log(chalk.yellow('Launch `ng test` and try to fix them.'));
  } else {
    console.log(chalk.green('Unit tests score: 100%'));
  }
  coverage();
}

function test() {
  console.log('Starting unit tests...');
  rimraf('./tmp', function () {
    exec('./node_modules/.bin/ng test --watch false', function () {
      readFile('tmp/karma-results.json', function (data) {
        handleKarmaResult(data);
      });
    }, function (error) {
      readFile('tmp/karma-results.json', function (data) {
        handleKarmaResult(data);
      }, function () {
        console.log(chalk.red('Error while running unit tests.'));
        console.log(chalk.red('Maybe you code doesn\'t compile?'));
        console.log(chalk.red('Launch `ng test` to see more.'));
      });
    });
  });
}

function coverage() {
  console.log('Starting code coverage...');
  exec('./node_modules/.bin/remap-istanbul -i coverage/coverage-final.json -o tmp/coverage-results.json -t json-summary', function () {
    readFile('tmp/coverage-results.json', function (data) {
      var results = JSON.parse(data);
      result.coverage = {covered: results.total.lines.covered, total: results.total.lines.total};
      var percent = 100 + result.coverage.covered - result.coverage.total;
      if (percent !== 100) {
        console.log(chalk.yellow('Code coverage score: ' + percent + '%'));
        console.log(chalk.yellow('Looks like you don\'t have a perfect code coverage.'));
        console.log(chalk.yellow('Maybe you skipped/deleted some unit tests?'));
      } else {
        console.log(chalk.green('Code coverage score: 100%'));
      }
      tslint();
    });
  }, function () {
    console.log(chalk.red('Error while running code coverage.'));
  })
}

function tslint() {
  console.log('Starting code analysis...');
  exec('./node_modules/.bin/tslint --force -t json -o tmp/tslint-results.json "src/**/*.ts"', function () {
    readFile('tmp/tslint-results.json', function (data) {
      if (data) {
        // var results = JSON.parse(data);
        // waiting for https://github.com/palantir/tslint/issues/1272 to be fixed
        result.tslint = {errors: 5};
        var percent = 100 - result.tslint.errors;
        console.log(chalk.yellow('Code quality score: ' + percent + '%'));
        console.log(chalk.yellow('Looks like you have some issues in your code.'));
        console.log(chalk.yellow('Try to run `npm run lint` to see what you can fix.'));
      } else {
        result.tslint = {errors: 0};
        console.log(chalk.green('Code quality score: 100%'));
      }
      e2e();
    });
  })
}

function e2e() {
  console.log('Starting end to end tests...');
  var ngServe = childProcess.spawn('./node_modules/.bin/ng', ['serve']);
  exec('./node_modules/.bin/ng e2e', function () {
    readFile('tmp/protractor-results.json', function (data) {
      var results = JSON.parse(data);
      var passed = 0;
      var failed = 0;
      for (var i = 0; i < results.length; i++) {
        var spec = results[i];
        for (var j = 0; j < spec.assertions.length; j++) {
          var assertion = spec.assertions[j];
          if (assertion.passed) {
            passed++;
          } else {
            failed++;
          }
        }
      }
      result.protractor = {success: passed, failed: failed};
      if (failed) {
        console.log(chalk.yellow('Looks like you have ' + failed + ' e2e tests failing.'));
        console.log(chalk.yellow('Check if your app is running with no error in the browser console,'));
        console.log(chalk.yellow('and try to launch the tests using `ng e2e`.'));
      } else {
        console.log(chalk.green('E2e tests score: 100%'));
      }
      submitResult();
    });
    ngServe.kill('SIGINT');
  }, function () {
    console.log(chalk.red('Looks like you have trouble running e2e tests.'));
    console.log(chalk.red('Check if your app is running with no error in the browser console,'));
    console.log(chalk.red('and try to launch the tests using `ng e2e`.'));
    ngServe.kill('SIGINT');
  });
}

function postScore(metadata, percent) {
  request
    .post({
        url: 'http://angular2-exercises.ninja-squad.com/api/packs/' + metadata.pack + '/exercises/' + metadata.id + '/scores',
        headers: {
          Authorization: 'Bearer: ' + metadata.token
        },
        json: {
          score: percent
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(chalk.red('Error while sending the results.'));
          console.log(chalk.red('Maybe check your connection?'));
        }
        else if (response.statusCode === 401) {
          console.log(chalk.red('Authentication failed. Please enter your credentials again.'));
          login(metadata, function (updatedMetadata) {
            postScore(updatedMetadata, percent);
          });
        }
        else if (response.statusCode !== 201) {
          console.log(chalk.red('Error while sending the results.'));
          console.log(response.statusCode, body);
        }
        else {
          console.log(chalk.gray('Score submitted.'));
        }
      });
}

function computeAndSend(metadata) {
  var percent = 100 - result.karma.failed * 5 - result.tslint.errors - (result.coverage.total - result.coverage.covered) - result.protractor.failed;
  if (percent < 10) {
    percent = 10;
  }
  // console.log(result);
  if (options.local) {
    if (percent !== 100) {
      throw new Error('Score is not perfect! ' + percent + '%');
    }
    console.log(chalk.green('Exercise score: ', percent + '%'));
  } else {
    if (percent !== 100) {
      console.log(chalk.yellow('Score is not perfect yet:', percent + '%'));
    } else {
      console.log(chalk.green('Perfect score, congrats!', percent + '%'));
    }
    postScore(metadata, percent);
  }
}

function submitResult() {
  exerciseMetadata(function (metadata) {
    if (!options.local && !metadata.token) {
      login(metadata, function (updatedMetadata) {
        computeAndSend(updatedMetadata);
      });
    } else {
      computeAndSend(metadata);
    }
  });
}

function exerciseMetadata(success) {
  readFile('./exercise.json', function (data) {
    success(JSON.parse(data))
  });
}

function login(metadata, success) {
  var schema = {
    properties: {
      email: {
        required: true
      },
      password: {
        hidden: true,
        required: true
      }
    }
  };
  prompt.start();
  prompt.get(schema, function (err, result) {
    request.post({
      url: 'http://angular2-exercises.ninja-squad.com/api/authentications',
      json: {
        email: result.email,
        password: result.password
      }
    }, function (err, response, body) {
      if (err || response.statusCode != 201) {
        console.log(chalk.red('Authentication failed, try again.'));
        login(metadata, function (updatedMetadata) {
          computeAndSend(updatedMetadata);
        });
      } else {
        console.log(chalk.green('Authentication success'));
        metadata.token = body.token;
        fs.writeFile('./exercise.json', JSON.stringify(metadata), 'utf8', function () {
          success(metadata);
        });
      }
    });
  });
}
