import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Shnitzel - just awesome!',
      'https://www.wininganddining.co.za/gallery/3022-24901-header.jpg',
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
      ]),
      new Recipe(
      'Best Grilled Cheese',
      'Amazing gouda and chedder grilled cheese',
      'http://cleaneatsfastfeets.com/wp-content/uploads/2013/04/Italian-Grilled-Cheese.jpg',
      [
        new Ingredient('Sharp Chedder', 1),
        new Ingredient('Sourdough Bread', 2),
        new Ingredient('tomato', 1),
        new Ingredient('pesto sauce', 1)
      ]),
      new Recipe(
      'Vegan Chocolate Cream Pie',
      'Vegan avacado and chocolate cream pie',
      'http://hellyeahitsvegan.com/wp-content/uploads/2012/10/chocolate-cream-pie.jpg',
      [
        new Ingredient('cocoa nibs', 2),
        new Ingredient('steel cut oats', 1),
        new Ingredient('avacado', 1),
        new Ingredient('cashew milk', 1),
        new Ingredient('sugar', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
