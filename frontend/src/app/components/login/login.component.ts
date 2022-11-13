import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario:FormGroup;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private router: Router,
    private firebase: FirebaseCodeErrorService,
    private _usuarioService:UsuarioService
    ) {
      this.loginUsuario = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
      })
   }

  ngOnInit(): void {
  }
  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    //this.spinner.show();

    //console.log(email,password);
    this._usuarioService.signIn2(email,password);
    

  }

}
