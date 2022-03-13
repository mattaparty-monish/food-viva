import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../services/firebase-auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
