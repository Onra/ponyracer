import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PonyracerAppComponent } from '../app/ponyracer.component';

beforeEachProviders(() => [PonyracerAppComponent]);

describe('App: Ponyracer', () => {
  it('should create the app',
      inject([PonyracerAppComponent], (app: PonyracerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ponyracer works!\'',
      inject([PonyracerAppComponent], (app: PonyracerAppComponent) => {
    expect(app.title).toEqual('ponyracer works!');
  }));
});
