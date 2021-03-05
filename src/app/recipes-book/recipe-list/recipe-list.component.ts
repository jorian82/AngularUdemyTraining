import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('1j2h3g5v9c0e', 'Test recipe 1', 'Test object description', 'http://www.vermontshortblog.com/wp-content/uploads/Recipes-Banner-777x437.jpg'),
    new Recipe('9d7a8w5v2m4n', 'Test recipe 2', 'Test object description', 'http://www.vermontshortblog.com/wp-content/uploads/Recipes-Banner-777x437.jpg')
  ];

  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }

}
