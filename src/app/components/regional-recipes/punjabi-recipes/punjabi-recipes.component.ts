import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../../services/food-viva-api.service';

@Component({
  selector: 'app-punjabi-recipes',
  templateUrl: './punjabi-recipes.component.html',
  styleUrls: ['./punjabi-recipes.component.css']
})
export class PunjabiRecipesComponent implements OnInit {
  recipes: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.recipes = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getPunjabiRecipes().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
    });
  }

}
