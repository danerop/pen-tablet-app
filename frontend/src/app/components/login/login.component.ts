import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';


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
    private firebase: FirebaseCodeErrorService
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

    this.spinner.show();

    console.log(email,password);
    this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{
      console.log(user);
      this.spinner.hide();
      this.toastr.success('Has iniciado sesion','Exito');
      this.router.navigate(["/listaDeProductos"]);
      
    }).catch((error)=>{
      console.error;
      this.spinner.hide();
      this.toastr.error(this.firebase.firebaseError(error.code),'Error');
    })
  }

}
