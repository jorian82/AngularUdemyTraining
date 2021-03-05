import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onIngredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('amountInput', { static: false }) amount: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient( name: HTMLInputElement ) {
    this.onIngredientAdded.emit(new Ingredient(name.value, this.amount.nativeElement.value));
  }

}
