/**
 * Created by bclover on 5/23/16.
 */
import {Component, OnInit} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/hero-detail.component.css'],
    templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private heroService:HeroService,
        private routeParams:RouteParams) {
    }

    goBack() {
        window.history.back();
    }

    ngOnInit() {
        let id = +this.routeParams.get('id'); //the + converts the value to a number
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}
