import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';
import { RaceComponent } from '../race/race.component';

@Component({
    moduleId: module.id,
    selector: 'pr-races',
    templateUrl: 'races.component.html',
    styleUrls: ['races.component.css'],
    directives: [RaceComponent],
    providers: [RaceService]
})
export class RacesComponent implements OnInit {

    races: Array<RaceModel> = [];

    constructor(private raceService: RaceService) {}

    ngOnInit() {
        this.raceService.list().subscribe(races => this.races = races);
    }

}
