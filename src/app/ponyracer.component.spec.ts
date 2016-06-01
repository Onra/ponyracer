import {
  beforeEachProviders,
  beforeEach,
  xdescribe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { PonyracerAppComponent } from './ponyracer.component';
import { FromNow } from './from-now.pipe';

xdescribe('App: Ponyracer', () => {

  let fixture: ComponentFixture<PonyracerAppComponent>;

  beforeEachProviders(() => [
    provide(PLATFORM_PIPES, {useValue: FromNow, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
  ]);

  beforeEach(inject([TestComponentBuilder],
    (tcb: TestComponentBuilder) => tcb.overrideProviders(PonyracerAppComponent, [
        provide(ROUTER_PROVIDERS, {useValue: ROUTER_FAKE_PROVIDERS})
      ])
      .createAsync(PonyracerAppComponent)
      .then(f => fixture = f)
  ));

  it('should have a title', () => {
    let element = fixture.nativeElement;
    expect(element.querySelector('h1')).toHaveText('Ponyracer');
  });
});
