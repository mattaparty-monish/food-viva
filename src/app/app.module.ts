import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegionalRecipesComponent } from './components/regional-recipes/regional-recipes.component';
import { SouthIndianRecipesComponent } from './components/regional-recipes/south-indian-recipes/south-indian-recipes.component';
import { NorthIndianRecipesComponent } from './components/regional-recipes/north-indian-recipes/north-indian-recipes.component';
import { MaharashtrianRecipesComponent } from './components/regional-recipes/maharashtrian-recipes/maharashtrian-recipes.component';
import { PunjabiRecipesComponent } from './components/regional-recipes/punjabi-recipes/punjabi-recipes.component';
import { GujaratiRecipesComponent } from './components/regional-recipes/gujarati-recipes/gujarati-recipes.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './components/user/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionalRecipesComponent,
    SouthIndianRecipesComponent,
    NorthIndianRecipesComponent,
    MaharashtrianRecipesComponent,
    PunjabiRecipesComponent,
    GujaratiRecipesComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    FooterComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    FirebaseAuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
