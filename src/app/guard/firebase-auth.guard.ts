import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthGuard implements CanActivate {

  constructor(public firebaseAuthService: FirebaseAuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.firebaseAuthService.isLoggedIn !== true) {
        this.router.navigate(['sign-in']);
      }
    return true;
  }
  
}
