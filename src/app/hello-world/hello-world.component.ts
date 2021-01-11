import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

    heroes = HEROES;

    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
