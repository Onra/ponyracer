"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var race_component_1 = require('./race.component');
var pony_component_1 = require('../pony/pony.component');
var from_now_pipe_1 = require('../from-now.pipe');
testing_1.describe('Component: Race', function () {
    var fixture;
    testing_1.beforeEachProviders(function () { return [
        core_1.provide(core_1.PLATFORM_PIPES, { useValue: from_now_pipe_1.FromNow, multi: true })
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { return tcb
        .overrideTemplate(pony_component_1.PonyComponent, '<h3>{{ponyModel.name}}</h3>')
        .createAsync(race_component_1.RaceComponent)
        .then(function (f) { return fixture = f; }); }));
    testing_1.it('should display a race name and its ponies', function () {
        // given a race in Paris with 5 ponies
        var raceComponent = fixture.componentInstance;
        raceComponent.raceModel = {
            name: 'Paris',
            ponies: [
                { name: 'Gentle Pie', color: 'YELLOW' },
                { name: 'Big Soda', color: 'ORANGE' },
                { name: 'Gentle Bottle', color: 'PURPLE' },
                { name: 'Superb Whiskey', color: 'GREEN' },
                { name: 'Fast Rainbow', color: 'BLUE' }
            ],
            startInstant: '2016-02-18T08:02:00Z'
        };
        // when triggering the change detection
        fixture.detectChanges();
        // then we should have the name and ponies displayed in the template
        var directives = fixture.debugElement.queryAll(platform_browser_1.By.directive(pony_component_1.PonyComponent));
        testing_1.expect(directives.length).toBe(5);
        var element = fixture.nativeElement;
        var raceName = element.querySelector('h2');
        testing_1.expect(raceName).toHaveText('Paris');
        var startInstant = element.querySelector('p');
        testing_1.expect(startInstant.textContent).toContain('ago');
        var ponies = element.querySelectorAll('h3');
        testing_1.expect(ponies.length).toBe(5);
        testing_1.expect(ponies[0]).toHaveText('Gentle Pie');
        testing_1.expect(ponies[1]).toHaveText('Big Soda');
        testing_1.expect(ponies[2]).toHaveText('Gentle Bottle');
        testing_1.expect(ponies[3]).toHaveText('Superb Whiskey');
        testing_1.expect(ponies[4]).toHaveText('Fast Rainbow');
    });
});
//# sourceMappingURL=race.component.spec.js.map