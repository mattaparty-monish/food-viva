import { Injectable, NgZone, Provider } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

export interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  emailVerified: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userState: any;

  constructor(public angularFirestore: AngularFirestore, public angularFireAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user') || '{}');
      }

      else {
          localStorage.setItem('user', '');
          JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }
  
  SignIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['regional-recipes']);
        });

        this.SetUserData(result.user as User);
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }
  
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument <any> = this.angularFirestore.doc('users/${ user.uid }');
    
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    
    return userRef.set(userState, {
      merge: true
    });
  }
  
  SignOut() {
    return this.angularFireAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })

      .then(() => {
        window.location.assign('https://accounts.google.com/Logout');
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
        this.SetUserData(result.user as User);
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }
  
  SendVerificationMail() {
    return this.angularFireAuth.currentUser
      .then((user) => {
        user?.sendEmailVerification()
      })
      
      .then(() => {
        this.router.navigate(['verify-email']);
      })
    ;
  }
  
  ForgotPassword(passwordResetEMail: string) {
    return this.angularFireAuth.sendPasswordResetEmail(passwordResetEMail)
      .then(() => {
        window.alert("Password Reset Email Has Been Sent To Your Registered Email Address. Please Check Your Inbox!");
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }
  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if ((user !== null) && (user.emailVerified !== false)) {
      return true;
    }

    else {
      return false;
    }
  }
  
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  
  AuthLogin(provider: any) {
    return this.angularFireAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['regional-recipes']);
        })
        
        this.SetUserData(result.user as User);
      })
      
      .catch((error) => {
        window.alert(error.message);
      })
    ;
  }

}
