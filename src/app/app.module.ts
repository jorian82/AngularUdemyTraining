import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes-book/recipe-list/recipe-item/recipe-item.component';
import { RecipesBookComponent } from './recipes-book/recipes-book.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes-book/recipe-detail/recipe-detail.component';

import { DropdownDirective } from './shared/dropdown.directive';

// import { RecipeService } from './recipes-book/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes-book/recipe-edit/recipe-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesBookComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
