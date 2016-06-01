System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/menu/menu.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){this.navbarCollapsed=!0}return a.prototype.ngOnInit=function(){},a.prototype.toggleNavbar=function(){this.navbarCollapsed=!this.navbarCollapsed},a=d([f.Component({moduleId:c.id,selector:"pr-menu",templateUrl:"menu.component.html",styleUrls:["menu.component.css"]}),e("design:paramtypes",[])],a)}();return b.MenuComponent=g,c.exports}),System.registerDynamic("app/race.service.js",["@angular/core","rxjs/add/operator/map","rxjs/add/observable/of","@angular/http"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core");a("rxjs/add/operator/map"),a("rxjs/add/observable/of");var g=a("@angular/http"),h=function(){function a(a){this.http=a}return a.prototype.list=function(){return this.http.get("http://ponyracer.ninja-squad.com/api/races?status=PENDING").map(function(a){return a.json()})},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.RaceService=h,c.exports}),System.registerDynamic("app/pony/pony.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){this.ponyClicked=new f.EventEmitter}return a.prototype.ngOnInit=function(){},a.prototype.getPonyImageUrl=function(){return"app/pony/pony-"+this.ponyModel.color.toLowerCase()+".gif"},a.prototype.getPonyAlt=function(){return"Image for "+this.ponyModel.name},a.prototype.clicked=function(){this.ponyClicked.emit(this.ponyModel)},d([f.Input(),e("design:type",Object)],a.prototype,"ponyModel",void 0),d([f.Output(),e("design:type",f.EventEmitter)],a.prototype,"ponyClicked",void 0),a=d([f.Component({moduleId:c.id,selector:"pr-pony",templateUrl:"pony.component.html",styleUrls:["pony.component.css"]}),e("design:paramtypes",[])],a)}();return b.PonyComponent=g,c.exports}),System.registerDynamic("app/race/race.component.js",["@angular/core","../pony/pony.component"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../pony/pony.component"),h=function(){function a(){}return a.prototype.ngOnInit=function(){},d([f.Input(),e("design:type",Object)],a.prototype,"raceModel",void 0),a=d([f.Component({moduleId:c.id,selector:"pr-race",templateUrl:"race.component.html",styleUrls:["race.component.css"],directives:[g.PonyComponent]}),e("design:paramtypes",[])],a)}();return b.RaceComponent=h,c.exports}),System.registerDynamic("app/races/races.component.js",["@angular/core","../race.service","../race/race.component"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../race.service"),h=a("../race/race.component"),i=function(){function a(a){this.raceService=a,this.races=[]}return a.prototype.ngOnInit=function(){var a=this;this.raceService.list().subscribe(function(b){return a.races=b})},a=d([f.Component({moduleId:c.id,selector:"pr-races",templateUrl:"races.component.html",styleUrls:["races.component.css"],directives:[h.RaceComponent],providers:[g.RaceService]}),e("design:paramtypes",[g.RaceService])],a)}();return b.RacesComponent=i,c.exports}),System.registerDynamic("app/home/home.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"pr-home",templateUrl:"home.component.html",styleUrls:["home.component.css"]}),e("design:paramtypes",[])],a)}();return b.HomeComponent=g,c.exports}),System.registerDynamic("app/ponyracer.component.js",["@angular/core","./menu/menu.component","./races/races.component","./home/home.component","@angular/http","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./menu/menu.component"),h=a("./races/races.component"),i=a("./home/home.component"),j=a("@angular/http"),k=a("@angular/router"),l=function(){function a(){this.title="Ponyracer"}return a=d([k.Routes([{path:"/",component:i.HomeComponent},{path:"/races",component:h.RacesComponent}]),f.Component({moduleId:c.id,selector:"ponyracer-app",templateUrl:"ponyracer.component.html",styleUrls:["ponyracer.component.css"],directives:[g.MenuComponent],providers:[j.HTTP_PROVIDERS,k.ROUTER_PROVIDERS]}),e("design:paramtypes",[])],a)}();return b.PonyracerAppComponent=l,c.exports}),System.registerDynamic("app/index.js",["./environment","./ponyracer.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./ponyracer.component")),c.exports});