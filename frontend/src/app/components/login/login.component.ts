import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _usuarioService:UsuarioService
    ) {
      this.loginUsuario = this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]],
      })
   }

  ngOnInit(): void {
  }
  
  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
     this._usuarioService.signIn2(email,password);
    

  }

}
