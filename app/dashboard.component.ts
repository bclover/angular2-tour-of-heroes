/**
 * Created by bclover on 5/24/16.
 */

import {Component, onInit} from '@angular/core';

import {Router} from '@angular/router-deprecated';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard.component.css'],
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    heroes:Hero[] = [];

    constructor(
        private heroService:HeroService,
        private router:Router) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }

    gotoDetail(hero:Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    }
}

