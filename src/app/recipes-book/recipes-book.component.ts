import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.css'],
  providers: [RecipeService]
})
export class RecipesBookComponent implements OnInit {
  selected: Recipe;

  constructor(private recipeService: RecipeService) {
    // this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => {
    //   this.selected = recipe;
    // });
  }

  ngOnInit(): void {
  }

  showRecipe(recipe: Recipe) {
    this.selected = recipe;
  }

}
