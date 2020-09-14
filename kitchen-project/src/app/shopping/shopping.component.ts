import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Mangoes', 10),
    new Ingredient('Onions', 5),
    new Ingredient('Lemons', 4),
    new Ingredient('Bananas', 7),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
