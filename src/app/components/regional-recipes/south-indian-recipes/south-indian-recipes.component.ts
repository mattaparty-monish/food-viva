import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../../services/food-viva-api.service';

@Component({
  selector: 'app-south-indian-recipes',
  templateUrl: './south-indian-recipes.component.html',
  styleUrls: ['./south-indian-recipes.component.css']
})
export class SouthIndianRecipesComponent implements OnInit {
  recipes: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.recipes = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getSouthIndianRecipes().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
    });
  }

}
