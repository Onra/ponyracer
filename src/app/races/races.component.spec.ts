import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, PLATFORM_PIPES } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RacesComponent } from './races.component';
import { RaceService } from '../race.service';
import { FromNow } from '../from-now.pipe';

describe('Component: Races', () => {

  let fixture: ComponentFixture<RacesComponent>;
  let service: RaceService = { list: () => {} } as RaceService;

  beforeEachProviders(() => [
    provide(PLATFORM_PIPES, {useValue: FromNow, multi: true})
  ]);

  beforeEach(inject([TestComponentBuilder],
    (tcb: TestComponentBuilder) => {
      spyOn(service, 'list').and.returnValue(Observable.of([
        {name: 'Lyon'},
        {name: 'Los Angeles'},
        {name: 'Sidney'},
        {name: 'Tokyo'},
        {name: 'Casablanca'}
      ]));
      return tcb.overrideProviders(RacesComponent, [provide(RaceService, {useValue: service})])
        .createAsync(RacesComponent)
        .then(f => fixture = f);
    }
  ));

  it('should display every race name in a title', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance.races.length).toBe(5);
    expect(fixture.componentInstance.races[0].name).toBe('Lyon');
    expect(fixture.componentInstance.races[1].name).toBe('Los Angeles');
    expect(fixture.componentInstance.races[2].name).toBe('Sidney');
    expect(fixture.componentInstance.races[3].name).toBe('Tokyo');
    expect(fixture.componentInstance.races[4].name).toBe('Casablanca');

    let element = fixture.nativeElement;
    let raceNames = element.querySelectorAll('h2');
    expect(raceNames.length).toBe(4);
    expect(raceNames[0]).toHaveText('Lyon');
    expect(raceNames[1]).toHaveText('Los Angeles');
    expect(raceNames[2]).toHaveText('Sidney');
    expect(raceNames[3]).toHaveText('Tokyo');
  });
});
