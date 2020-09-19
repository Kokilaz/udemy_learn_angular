import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('My First Recipe', 'This is a Test', 'https://342713-1058125-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/07/Easy-Zucchini-Fritters-Step-by-Step-Recipe.jpg'),
    new Recipe('My Second Recipe', 'Tasty indian recipe', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1xw:1xh;center,top&resize=768:*')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }

}
