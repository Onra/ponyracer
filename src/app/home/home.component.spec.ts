import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('Component: Home', () => {

  let fixture: ComponentFixture<HomeComponent>;

  beforeEachProviders(() => [
    ROUTER_FAKE_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
  ]);

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => tcb
    .createAsync(HomeComponent)
    .then(f => fixture = f)
  ));

  it('display the title and quote', () => {
    let element = fixture.nativeElement;

    let title = element.querySelector('h1');
    expect(title).toHaveText('Ponyracer Always a pleasure to bet on ponies');

    let subtitle = element.querySelector('small');
    expect(subtitle).toHaveText('Always a pleasure to bet on ponies');
  });

  it('display a link to go the races', () => {
    let element = fixture.nativeElement;
    fixture.detectChanges();
    let button = element.querySelector('a');
    expect(button).toHaveText('Races');
    expect(button.getAttribute('href')).toBe('/races');
  });

});
