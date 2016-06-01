import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { MenuComponent } from './menu.component';

describe('Component: Menu', () => {
  let fixture: ComponentFixture<MenuComponent>;

  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
  ]);

  beforeEach(inject([TestComponentBuilder],
    (tcb: TestComponentBuilder) => tcb.createAsync(MenuComponent).then(f => fixture = f)
  ));

  it('should have a `navbarCollapsed` field', () => {
    let menu: MenuComponent = new MenuComponent();
    expect(menu.navbarCollapsed)
      .toBe(true, 'Check that `navbarCollapsed` is initialized with `true`.' +
        'Maybe you forgot to declare `navbarCollapsed` in your component.');
  });

  it('should have a `toggleNavbar` method', () => {
    let menu: MenuComponent = new MenuComponent();
    expect(menu.toggleNavbar)
      .not.toBeUndefined('Maybe you forgot to declare a `toggleNavbar()` method');

    menu.toggleNavbar();

    expect(menu.navbarCollapsed)
      .toBe(false, '`toggleNavbar()` should change `navbarCollapsed` from true to false`');

    menu.toggleNavbar();

    expect(menu.navbarCollapsed)
      .toBe(true, '`toggleNavbar()` should change `navbarCollapsed` from false to true`');
  });

  it('should toggle the class on click', () => {
    let element = fixture.nativeElement;

    fixture.detectChanges();

    let navbar = element.querySelector('#navbar');
    expect(navbar).toHaveCssClass('collapse');

    let button = element.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    navbar = element.querySelector('#navbar');
    expect(navbar).not.toHaveCssClass('collapse');
  });
});
