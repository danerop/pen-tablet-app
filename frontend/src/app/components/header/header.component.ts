import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: String;

  constructor() {
    this.usuario = "Hector";
  }

  ngOnInit(): void {
    
  }

}
