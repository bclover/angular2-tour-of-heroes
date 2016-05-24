import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    directives: [HeroDetailComponent],
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html'
})

export class HeroesComponent implements OnInit {

    heroes:Hero[];
    title = 'Tour of Heroes';
    selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private router:Router) {
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    getHeroesSlowly() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id}]);
    }

    ngOnInit() {
        this.getHeroes();
        //uncomment the line below to simulate a slow data retrieval time of 5 seconds
        //this.getHeroesSlowly();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}

