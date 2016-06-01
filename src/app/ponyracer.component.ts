import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { HomeComponent } from './home/home.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, Routes} from '@angular/router';

@Routes([
    {path: '/', component: HomeComponent},
    {path: '/races', component: RacesComponent},
])

@Component({
  moduleId: module.id,
  selector: 'ponyracer-app',
  templateUrl: 'ponyracer.component.html',
  styleUrls: ['ponyracer.component.css'],
  directives: [MenuComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class PonyracerAppComponent {
  title = 'Ponyracer';
}
