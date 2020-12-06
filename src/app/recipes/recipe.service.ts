import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Shnitzel - just awesome!', 
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'A delicious perfectly cooked hamburger', 
      'https://makeyourmeals.com/wp-content/uploads/2019/03/air-fryer-hamburger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
        new Ingredient('tomato', 1),
        new Ingredient('onion', 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}