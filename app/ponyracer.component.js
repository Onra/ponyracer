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
var menu_component_1 = require('./menu/menu.component');
var races_component_1 = require('./races/races.component');
var home_component_1 = require('./home/home.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var PonyracerAppComponent = (function () {
    function PonyracerAppComponent() {
        this.title = 'Ponyracer';
    }
    PonyracerAppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/races', component: races_component_1.RacesComponent },
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'ponyracer-app',
            templateUrl: 'ponyracer.component.html',
            styleUrls: ['ponyracer.component.css'],
            directives: [menu_component_1.MenuComponent],
            providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], PonyracerAppComponent);
    return PonyracerAppComponent;
}());
exports.PonyracerAppComponent = PonyracerAppComponent;
//# sourceMappingURL=ponyracer.component.js.map