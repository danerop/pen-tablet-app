import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  formGroup!: FormGroup;
  username!: String;

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){
    
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('',  Validators.required),
    });
  }

  onSubmit(){
    this.username = this.formGroup.get('username')?.value;  
  }
  
}
