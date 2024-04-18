import { Injectable } from '@angular/core';
import { Cocktail } from './models/classes/cocktail.class';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList: Cocktail[] = [
    new Cocktail("Grenadine à l'eau", 5, "https://www.corsicavap.com/img/p/9/1/9/919-large_default.jpg"),
    new Cocktail("Menthe à l'eau", 5, "https://www.infocalories.fr/images/sirop-menthe.jpg"),
    new Cocktail("Fraise à l'eau", 5, "http://lacuisinedeniya.fr/wp-content/uploads/2015/07/sirop_fraise.jpg"),
    new Cocktail("Lait fraise", 4, "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_1564855816.jpg"),

  ];

  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktailList;
  }
}
