import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from '../recipe.model';


@Injectable()
export class RecipeEffects {

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.fetchRecipes),
      switchMap(() => {
        return this.http.get<Recipe[]>(
        'https://ng-html-firebase-default-rtdb.firebaseio.com/recipes.json'
        );
      }),
      map(recipes => {
        console.log(recipes)
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      map(recipes => {
        return RecipeActions.setRecipes({recipes});
      })
    )
  );

  storeRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.storeRecipes),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([actionData, recipesState]) => {
        return this.http.put(
        'https://ng-html-firebase-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
        );
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
