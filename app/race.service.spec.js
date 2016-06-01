"use strict";
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
require('rxjs/add/observable/of');
var race_service_1 = require('./race.service');
testing_1.describe('RaceService Service', function () {
    testing_1.beforeEachProviders(function () { return [
        testing_2.MockBackend,
        http_1.BaseRequestOptions,
        core_1.provide(http_1.Http, {
            useFactory: function (backend, defaultOptions) { return new http_1.Http(backend, defaultOptions); },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
        }),
        race_service_1.RaceService
    ]; });
    testing_1.it('should return an Observable of 3 races', testing_1.inject([race_service_1.RaceService, testing_2.MockBackend], function (service, mockBackend) {
        // fake response
        var hardcodedRaces = [{ name: 'Paris' }, { name: 'Tokyo' }, { name: 'Lyon' }];
        var response = new http_1.Response(new http_1.ResponseOptions({ body: hardcodedRaces }));
        // return the response if we have a connection to the MockBackend
        mockBackend.connections.subscribe(function (connection) {
            testing_1.expect(connection.request.url)
                .toBe('http://ponyracer.ninja-squad.com/api/races?status=PENDING');
            testing_1.expect(connection.request.method).toBe(http_1.RequestMethod.Get);
            connection.mockRespond(response);
        });
        service.list().subscribe(function (races) {
            testing_1.expect(races.length).toBe(3);
        });
    }));
});
//# sourceMappingURL=race.service.spec.js.map