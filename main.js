"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var from_now_pipe_1 = require('./app/from-now.pipe');
var router_1 = require('@angular/router');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.PonyracerAppComponent, [
    core_1.provide(core_1.PLATFORM_PIPES, { useValue: [from_now_pipe_1.FromNow], multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true })
]);
//# sourceMappingURL=main.js.map