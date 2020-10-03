import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] =[
        new Ingredient('Mangoes', 10),
        new Ingredient('Onions', 5),
        new Ingredient('Lemons', 4),
        new Ingredient('Bananas', 7),
      ];
      getIngredients() {
        return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient) {
         this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
      }
      
      addIngredients(ingredients: Ingredient[]) {
        //   for(let ingredient of ingredients) {
        //       this.addIngredient(ingredient);
        //   }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    }