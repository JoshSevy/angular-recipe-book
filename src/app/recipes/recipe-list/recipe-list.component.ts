import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2019/06/Thai-Cucumber-Salad-Recipe-3.jpg'),
    new Recipe('Hamburger', 'A delicious perfectly cooked hamburger', 'https://makeyourmeals.com/wp-content/uploads/2019/03/air-fryer-hamburger.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
