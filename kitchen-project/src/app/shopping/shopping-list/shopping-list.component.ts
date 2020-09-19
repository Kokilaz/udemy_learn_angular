import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() ingredientsAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
const ingName = this.nameInputRef.nativeElement.value;
const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.ingredientsAdded.emit(newIngredient);
  }

}
