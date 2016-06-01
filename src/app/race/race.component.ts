
import { Component, OnInit, Input } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
    moduleId: module.id,
    selector: 'pr-race',
    templateUrl: 'race.component.html',
    styleUrls: ['race.component.css'],
    directives: [PonyComponent]
})
export class RaceComponent implements OnInit {

    @Input() raceModel: RaceModel;

    constructor() {}

    ngOnInit() {
    }

}
