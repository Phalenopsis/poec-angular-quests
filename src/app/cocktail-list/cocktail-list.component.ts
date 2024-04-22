import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/classes/cocktail.class';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  cocktails!: Cocktail[];
  constructor(public cocktailService: CocktailService) {
    this.cocktailService.getCocktails().subscribe(cocktails => this.cocktails = cocktails
    );

  }
}
