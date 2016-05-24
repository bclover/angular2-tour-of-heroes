/**
 * Created by bclover on 5/23/16.
 */

import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }
}