/**
 * Created by bclover on 5/24/16.
 */

import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HeroService}     from './hero.service';
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ROUTER_PROVIDERS
    ],
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
            <router-outlet></router-outlet>
        </nav>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
}

