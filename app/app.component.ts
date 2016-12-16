import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>

    <p> Second Example </p>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>

    <p> Third Example </p>
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)=addHero(newHero.value)>Add</button>

    `
})
export class AppComponent  { 
  title: string;
  myHero: Hero;
  heroes:Array<Hero>;

  values = '';

  constructor() {
    this.title = 'Tour of Heroes';
    //this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[2];
    //this.myHero = 'Windstorm';
  }

  onKey(event:any) { // without type info
    this.values += event.key + ' | ';
  }

  addHero(newHero:string){
    if(newHero){
      var newHeroDec= new Hero(35,newHero);
      this.heroes.push(newHeroDec);
    }
  }
}
