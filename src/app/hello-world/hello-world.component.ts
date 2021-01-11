import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

    heroes: Hero[];

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

}
