"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var testing_3 = require('@angular/router/testing');
var ponyracer_component_1 = require('./ponyracer.component');
var from_now_pipe_1 = require('./from-now.pipe');
testing_1.xdescribe('App: Ponyracer', function () {
    var fixture;
    testing_1.beforeEachProviders(function () { return [
        core_1.provide(core_1.PLATFORM_PIPES, { useValue: from_now_pipe_1.FromNow, multi: true }),
        core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true })
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { return tcb.overrideProviders(ponyracer_component_1.PonyracerAppComponent, [
        core_1.provide(router_1.ROUTER_PROVIDERS, { useValue: testing_3.ROUTER_FAKE_PROVIDERS })
    ])
        .createAsync(ponyracer_component_1.PonyracerAppComponent)
        .then(function (f) { return fixture = f; }); }));
    testing_1.it('should have a title', function () {
        var element = fixture.nativeElement;
        testing_1.expect(element.querySelector('h1')).toHaveText('Ponyracer');
    });
});
//# sourceMappingURL=ponyracer.component.spec.js.map