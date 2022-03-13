import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodVivaApiService {
  private REGIONAL_RECIPES: string = '/regional-recipes/regional-recipes.json';

  private SOUTH_INDIAN_RECIPES: string = '/regional-recipes/south-indian-recipes/south-indian-recipes.json';

  private NORTH_INDIAN_RECIPES: string = '/regional-recipes/north-indian-recipes/north-indian-recipes.json';

  private MAHARASHTRIAN_RECIPES: string = '/regional-recipes/maharashtrian-recipes/maharashtrian-recipes.json';

  private PUNJABI_RECIPES: string = '/regional-recipes/punjabi-recipes/punjabi-recipes.json';

  private GUJARATI_RECIPES: string = '/regional-recipes/gujarati-recipes/gujarati-recipes.json';

  constructor(private http: HttpClient) { }

  public getRegionalRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.REGIONAL_RECIPES }`);
  }

  public getSouthIndianRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.SOUTH_INDIAN_RECIPES }`);
  }

  public getNorthIndianRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.NORTH_INDIAN_RECIPES }`);
  }

  public getMaharashtrianRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.MAHARASHTRIAN_RECIPES }`);
  }

  public getPunjabiRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.PUNJABI_RECIPES }`);
  }

  public getGujaratiRecipes() {
    return this.http.get(`https://mattaparty-monish.github.io/food-viva-api-v1${ this.GUJARATI_RECIPES }`);
  }
  
}
