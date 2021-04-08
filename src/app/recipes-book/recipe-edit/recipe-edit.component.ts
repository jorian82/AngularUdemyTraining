import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.params.subscribe( params => {
      this.id = +params['id']; // adding + to the object we force typescript to convert the value into a number
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    });
  }

}
