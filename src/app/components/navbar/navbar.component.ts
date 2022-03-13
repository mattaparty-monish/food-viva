import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
