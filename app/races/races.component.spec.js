"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var races_component_1 = require('./races.component');
var race_service_1 = require('../race.service');
var from_now_pipe_1 = require('../from-now.pipe');
testing_1.describe('Component: Races', function () {
    var fixture;
    var service = { list: function () { } };
    testing_1.beforeEachProviders(function () { return [
        core_1.provide(core_1.PLATFORM_PIPES, { useValue: from_now_pipe_1.FromNow, multi: true })
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        spyOn(service, 'list').and.returnValue(Observable_1.Observable.of([
            { name: 'Lyon' },
            { name: 'Los Angeles' },
            { name: 'Sidney' },
            { name: 'Tokyo' },
            { name: 'Casablanca' }
        ]));
        return tcb.overrideProviders(races_component_1.RacesComponent, [core_1.provide(race_service_1.RaceService, { useValue: service })])
            .createAsync(races_component_1.RacesComponent)
            .then(function (f) { return fixture = f; });
    }));
    testing_1.it('should display every race name in a title', function () {
        fixture.detectChanges();
        testing_1.expect(fixture.componentInstance.races.length).toBe(5);
        testing_1.expect(fixture.componentInstance.races[0].name).toBe('Lyon');
        testing_1.expect(fixture.componentInstance.races[1].name).toBe('Los Angeles');
        testing_1.expect(fixture.componentInstance.races[2].name).toBe('Sidney');
        testing_1.expect(fixture.componentInstance.races[3].name).toBe('Tokyo');
        testing_1.expect(fixture.componentInstance.races[4].name).toBe('Casablanca');
        var element = fixture.nativeElement;
        var raceNames = element.querySelectorAll('h2');
        testing_1.expect(raceNames.length).toBe(4);
        testing_1.expect(raceNames[0]).toHaveText('Lyon');
        testing_1.expect(raceNames[1]).toHaveText('Los Angeles');
        testing_1.expect(raceNames[2]).toHaveText('Sidney');
        testing_1.expect(raceNames[3]).toHaveText('Tokyo');
    });
});
//# sourceMappingURL=races.component.spec.js.map