/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 22000,
  specs: [
    '../e2e/**/*.e2e.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
  resultJsonOutputFile: 'tmp/protractor-results.json'
};
