/**
 * Created by bclover on 5/23/16.
 */

import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from "./hero";

@Injectable()
export class HeroService {

    getHero(id: Number) {
        return Promise.resolve(HEROES)
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 5000) // 2 seconds
        );
    }

}