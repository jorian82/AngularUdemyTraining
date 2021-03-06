import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amount: ElementRef

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient( name: HTMLInputElement ) {
    this.slService.addIngredient(new Ingredient(name.value, this.amount.nativeElement.value))
  }

}
