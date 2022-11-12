import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = false;
  @Input() email!: String;
  usuario: String;

  

  constructor(private afAuth: AngularFireAuth, ) {
    this.usuario = "";
    
  }

  ngOnInit(): void {

    this.afAuth.idToken.subscribe(data => this.isLogged=true);
  }
  
}
