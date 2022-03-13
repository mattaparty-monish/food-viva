import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../../services/food-viva-api.service';

@Component({
  selector: 'app-maharashtrian-recipes',
  templateUrl: './maharashtrian-recipes.component.html',
  styleUrls: ['./maharashtrian-recipes.component.css']
})
export class MaharashtrianRecipesComponent implements OnInit {
  recipes: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.recipes = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getMaharashtrianRecipes().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
    });
  }

}
