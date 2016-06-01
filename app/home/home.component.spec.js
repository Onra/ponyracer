"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var testing_3 = require('@angular/router/testing');
var home_component_1 = require('./home.component');
testing_1.describe('Component: Home', function () {
    var fixture;
    testing_1.beforeEachProviders(function () { return [
        testing_3.ROUTER_FAKE_PROVIDERS,
        core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true })
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { return tcb
        .createAsync(home_component_1.HomeComponent)
        .then(function (f) { return fixture = f; }); }));
    testing_1.it('display the title and quote', function () {
        var element = fixture.nativeElement;
        var title = element.querySelector('h1');
        testing_1.expect(title).toHaveText('Ponyracer Always a pleasure to bet on ponies');
        var subtitle = element.querySelector('small');
        testing_1.expect(subtitle).toHaveText('Always a pleasure to bet on ponies');
    });
    testing_1.it('display a link to go the races', function () {
        var element = fixture.nativeElement;
        fixture.detectChanges();
        var button = element.querySelector('a');
        testing_1.expect(button).toHaveText('Races');
        testing_1.expect(button.getAttribute('href')).toBe('/races');
    });
});
//# sourceMappingURL=home.component.spec.js.map