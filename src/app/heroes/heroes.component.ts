import { Component } from '@angular/core';
import { IHero } from '../hero';
import { NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // standalone: true,
  // imports: [
  //   NgFor
  // ]
})
export class HeroesComponent {

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  heroes: IHero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: IHero;
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
