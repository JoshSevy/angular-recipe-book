import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2019/06/Thai-Cucumber-Salad-Recipe-3.jpg'),
    new Recipe('Hamburger', 'A delicious perfectly cooked hamburger', 'https://makeyourmeals.com/wp-content/uploads/2019/03/air-fryer-hamburger.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}