import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { By } from '@angular/platform-browser';
import { provide, PLATFORM_PIPES } from '@angular/core';
import { RaceComponent } from './race.component';
import { PonyComponent } from '../pony/pony.component';
import { FromNow } from '../from-now.pipe';

describe('Component: Race', () => {

  let fixture: ComponentFixture<RaceComponent>;

  beforeEachProviders(() => [
    provide(PLATFORM_PIPES, {useValue: FromNow, multi: true})
  ]);

  beforeEach(inject([TestComponentBuilder],
    (tcb: TestComponentBuilder) => tcb
      .overrideTemplate(PonyComponent, '<h3>{{ponyModel.name}}</h3>')
      .createAsync(RaceComponent)
      .then(f => fixture = f)
  ));

  it('should display a race name and its ponies', () => {
    // given a race in Paris with 5 ponies
    let raceComponent = fixture.componentInstance;
    raceComponent.raceModel = {
      name: 'Paris',
      ponies: [
        {name: 'Gentle Pie', color: 'YELLOW'},
        {name: 'Big Soda', color: 'ORANGE'},
        {name: 'Gentle Bottle', color: 'PURPLE'},
        {name: 'Superb Whiskey', color: 'GREEN'},
        {name: 'Fast Rainbow', color: 'BLUE'}
      ],
      startInstant: '2016-02-18T08:02:00Z'
    };

    // when triggering the change detection
    fixture.detectChanges();

    // then we should have the name and ponies displayed in the template
    let directives = fixture.debugElement.queryAll(By.directive(PonyComponent));
    expect(directives.length).toBe(5);
    let element = fixture.nativeElement;
    let raceName = element.querySelector('h2');
    expect(raceName).toHaveText('Paris');
    let startInstant = element.querySelector('p');
    expect(startInstant.textContent).toContain('ago');
    let ponies = element.querySelectorAll('h3');
    expect(ponies.length).toBe(5);
    expect(ponies[0]).toHaveText('Gentle Pie');
    expect(ponies[1]).toHaveText('Big Soda');
    expect(ponies[2]).toHaveText('Gentle Bottle');
    expect(ponies[3]).toHaveText('Superb Whiskey');
    expect(ponies[4]).toHaveText('Fast Rainbow');
  });
});

