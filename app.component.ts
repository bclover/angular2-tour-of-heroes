import {Component} from '@angular/core';

export class Hero {
	id:number;
	name:string;
}
@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
    </ul>
    <div *ngIf="selectedHero">
		<h2>{{selectedHero.name}} Details:</h2>
		<div><label>id:</label>{{selectedHero.id}}</div>
		<div>
			<label>name:</label>
			<input [(ngModel)]="selectedHero.name" placeholder="Type a name here.">
		</div>
	</div>
    `,
	styles: [`
  .selected {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent {
	public heroes = HEROES;
	title = 'Tour of Heroes';
	selectedHero: Hero;
	onSelect(hero: Hero) {
		console.log('her0 selected:'+hero.name);
		this.selectedHero = hero;
	}
}

var HEROES:Hero[] = [
	{"id": 11, "name": "Bryan Clover"},
	{"id": 12, "name": "Johnny Depp"},
	{"id": 13, "name": "Jack Nicholson"},
	{"id": 14, "name": "Dustin Hoffman"},
	{"id": 15, "name": "Newton Martins"},
	{"id": 16, "name": "John Travolta"},
	{"id": 17, "name": "Morgan Freeman"},
	{"id": 18, "name": "James Earl Jones"},
	{"id": 19, "name": "Gweneth Paltrow"},
	{"id": 20, "name": "Nicole Kidman"}
];

