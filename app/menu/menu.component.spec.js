"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var testing_3 = require('@angular/router/testing');
var menu_component_1 = require('./menu.component');
testing_1.describe('Component: Menu', function () {
    var fixture;
    testing_1.beforeEachProviders(function () { return [
        testing_3.ROUTER_FAKE_PROVIDERS,
        core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true })
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { return tcb.createAsync(menu_component_1.MenuComponent).then(function (f) { return fixture = f; }); }));
    testing_1.it('should have a `navbarCollapsed` field', function () {
        var menu = new menu_component_1.MenuComponent();
        testing_1.expect(menu.navbarCollapsed)
            .toBe(true, 'Check that `navbarCollapsed` is initialized with `true`.' +
            'Maybe you forgot to declare `navbarCollapsed` in your component.');
    });
    testing_1.it('should have a `toggleNavbar` method', function () {
        var menu = new menu_component_1.MenuComponent();
        testing_1.expect(menu.toggleNavbar)
            .not.toBeUndefined('Maybe you forgot to declare a `toggleNavbar()` method');
        menu.toggleNavbar();
        testing_1.expect(menu.navbarCollapsed)
            .toBe(false, '`toggleNavbar()` should change `navbarCollapsed` from true to false`');
        menu.toggleNavbar();
        testing_1.expect(menu.navbarCollapsed)
            .toBe(true, '`toggleNavbar()` should change `navbarCollapsed` from false to true`');
    });
    testing_1.it('should toggle the class on click', function () {
        var element = fixture.nativeElement;
        fixture.detectChanges();
        var navbar = element.querySelector('#navbar');
        testing_1.expect(navbar).toHaveCssClass('collapse');
        var button = element.querySelector('button');
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        navbar = element.querySelector('#navbar');
        testing_1.expect(navbar).not.toHaveCssClass('collapse');
    });
});
//# sourceMappingURL=menu.component.spec.js.map