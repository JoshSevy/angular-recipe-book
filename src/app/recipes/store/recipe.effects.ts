import { Actions, Effect } from '@ngrx/effects';

export class RecipeEffects {
  @Effect()
  fetchRecipes

  constructor(private actions$: Actions) {}
}
