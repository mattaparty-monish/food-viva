import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../services/firebase-auth.service';
import { FoodVivaApiService } from './../../services/food-viva-api.service';

@Component({
  selector: 'app-regional-recipes',
  templateUrl: './regional-recipes.component.html',
  styleUrls: ['./regional-recipes.component.css']
})
export class RegionalRecipesComponent implements OnInit {
  regions: Array <any>;

  constructor(public firebaseAuthService: FirebaseAuthService, private foodVivaApiService: FoodVivaApiService) {
    this.regions = [];
  }

  ngOnInit(): void {
    this.foodVivaApiService.getRegionalRecipes().subscribe((data: any) => {
      console.log(data);
      this.regions = data;
    });
  }

}
