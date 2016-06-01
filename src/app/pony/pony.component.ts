import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
    moduleId: module.id,
    selector: 'pr-pony',
    templateUrl: 'pony.component.html',
    styleUrls: ['pony.component.css']
})
export class PonyComponent implements OnInit {

    @Input() ponyModel: PonyModel;
    @Output() ponyClicked: EventEmitter<PonyModel> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    getPonyImageUrl() {
        return `app/pony/pony-${this.ponyModel.color.toLowerCase()}.gif`;
    }

    getPonyAlt() {
        return `Image for ${this.ponyModel.name}`;
    }

    clicked() {
        this.ponyClicked.emit(this.ponyModel);
    }
}
