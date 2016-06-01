"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pony_component_1 = require('../pony/pony.component');
var RaceComponent = (function () {
    function RaceComponent() {
    }
    RaceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RaceComponent.prototype, "raceModel", void 0);
    RaceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pr-race',
            templateUrl: 'race.component.html',
            styleUrls: ['race.component.css'],
            directives: [pony_component_1.PonyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RaceComponent);
    return RaceComponent;
}());
exports.RaceComponent = RaceComponent;
//# sourceMappingURL=race.component.js.map