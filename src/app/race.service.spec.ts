import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/add/observable/of';

import { RaceService } from './race.service';

describe('RaceService Service', () => {

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
      deps: [MockBackend, BaseRequestOptions]
    }),
    RaceService
  ]);

  it('should return an Observable of 3 races', inject([RaceService, MockBackend],
    (service, mockBackend) => {
      // fake response
      let hardcodedRaces = [{name: 'Paris'}, {name: 'Tokyo'}, {name: 'Lyon'}];
      let response = new Response(new ResponseOptions({body: hardcodedRaces}));
      // return the response if we have a connection to the MockBackend
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.url)
          .toBe('http://ponyracer.ninja-squad.com/api/races?status=PENDING');
        expect(connection.request.method).toBe(RequestMethod.Get);
        connection.mockRespond(response);
      });

      service.list().subscribe(races => {
        expect(races.length).toBe(3);
      });
    }
  ));

});
