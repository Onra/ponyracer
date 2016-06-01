"use strict";
var testing_1 = require('@angular/core/testing');
var from_now_pipe_1 = require('./from-now.pipe');
testing_1.describe('FromNow Pipe', function () {
    testing_1.it('should transform the input', function () {
        // given a pipe
        var pipe = new from_now_pipe_1.FromNow();
        // when transforming the date
        var date = '2016-02-18T08:02:00Z';
        var transformed = pipe.transform(date);
        // then we should have a formatted string
        testing_1.expect(transformed).toContain('ago');
    });
});
//# sourceMappingURL=from-now.pipe.spec.js.map