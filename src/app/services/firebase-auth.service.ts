import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userData: any;

  constructor(public angularFirestore: AngularFirestore, public angularFireAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
      }

      else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  
  SignIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['regional-recipes']);
        });

        this.SetUserData(result.user);
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }

  SignUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }
  
  SendVerificationMail() {
    return this.angularFireAuth.currentUser
      .then((user: any) => {
        user.sendEmailVerification();
      })
      
      .then(() => {
        this.router.navigate(['verify-email']);
      })
    ;
  }
  
  ForgotPassword(passwordResetEmail: string) {
    return this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert("Password Reset Email Has Been Sent To Your Registered Email Address. Please Check Your Inbox!");
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((result: any) => {
        if (result) {
          this.router.navigate(['regional-recipes']);
        }
      })
    ;
  }
  
  AuthLogin(provider: any) {
    return this.angularFireAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['regional-recipes']);
        });
        
        this.SetUserData(result.user);
      })
      
      .catch((error) => {
        window.alert(error);
      })
    ;
  }
  
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument <any> = this.angularFirestore.doc(`users/${ user.uid }`);
    
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    
    return userRef.set(userData, {
      merge: true,
    });
  }
  
  SignOut() {
    return this.angularFireAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
    ;
  }
  
}
