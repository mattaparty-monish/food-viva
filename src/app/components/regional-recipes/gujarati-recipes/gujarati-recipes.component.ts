import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../../services/food-viva-api.service';

@Component({
  selector: 'app-gujarati-recipes',
  templateUrl: './gujarati-recipes.component.html',
  styleUrls: ['./gujarati-recipes.component.css']
})
export class GujaratiRecipesComponent implements OnInit {
  recipes: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.recipes = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getGujaratiRecipes().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
    });
  }

}
