import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GujaratiRecipesComponent } from './components/regional-recipes/gujarati-recipes/gujarati-recipes.component';
import { MaharashtrianRecipesComponent } from './components/regional-recipes/maharashtrian-recipes/maharashtrian-recipes.component';
import { NorthIndianRecipesComponent } from './components/regional-recipes/north-indian-recipes/north-indian-recipes.component';
import { PunjabiRecipesComponent } from './components/regional-recipes/punjabi-recipes/punjabi-recipes.component';
import { RegionalRecipesComponent } from './components/regional-recipes/regional-recipes.component';
import { SouthIndianRecipesComponent } from './components/regional-recipes/south-indian-recipes/south-indian-recipes.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/user/verify-email/verify-email.component';
import { FirebaseAuthGuard } from './guard/firebase-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'regional-recipes', component: RegionalRecipesComponent },
  { path: 'regional-recipes/south-indian-recipes', component: SouthIndianRecipesComponent },
  { path: 'regional-recipes/north-indian-recipes', component: NorthIndianRecipesComponent },
  { path: 'regional-recipes/maharashtrian-recipes', component: MaharashtrianRecipesComponent },
  { path: 'regional-recipes/punjabi-recipes', component: PunjabiRecipesComponent },
  { path: 'regional-recipes/gujarati-recipes', component: GujaratiRecipesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
