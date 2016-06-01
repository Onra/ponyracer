import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pr-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    navbarCollapsed: boolean = true;

    constructor() {}

    ngOnInit() {
    }

    toggleNavbar() {
        this.navbarCollapsed = !this.navbarCollapsed;
    }

}
