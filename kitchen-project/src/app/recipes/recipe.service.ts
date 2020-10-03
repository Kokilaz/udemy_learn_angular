import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'My First Recipe', 
            'This is a Test', 
            'https://342713-1058125-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/07/Easy-Zucchini-Fritters-Step-by-Step-Recipe.jpg',
            [
                new Ingredient('ketchup', 1),
                new Ingredient('Buffalo Sauce', 1)
        ]),
        new Recipe(
            'My Second Recipe', 
            'Tasty indian recipe', 
            'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1xw:1xh;center,top&resize=768:*',
      [
          new Ingredient('Sour Cream', 1),
          new Ingredient('Mango Lassi', 1)
      ])

        ];

        constructor(private slService: ShoppingService) {}
    
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
      }
    }