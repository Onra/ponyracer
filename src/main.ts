import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, PLATFORM_PIPES, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { PonyracerAppComponent, environment } from './app/';
import { FromNow } from './app/from-now.pipe';
import { ROUTER_DIRECTIVES } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(PonyracerAppComponent,
    [
        provide(PLATFORM_PIPES, {useValue: [FromNow], multi: true}),
        provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
    ]);
