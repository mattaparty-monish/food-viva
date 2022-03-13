import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../../services/food-viva-api.service';

@Component({
  selector: 'app-north-indian-recipes',
  templateUrl: './north-indian-recipes.component.html',
  styleUrls: ['./north-indian-recipes.component.css']
})
export class NorthIndianRecipesComponent implements OnInit {
  recipes: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.recipes = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getNorthIndianRecipes().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
    });
  }

}
