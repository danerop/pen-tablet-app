import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  regitrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService ) {
    this.regitrarUsuario=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]],
      repetirPassword:['',Validators.required],
      direccion: ['', Validators.required]
     
    })
   }

  ngOnInit(): void {
  }

  registrar2(){
    const email = this.regitrarUsuario.value.email;
    const apellido = this.regitrarUsuario.value.apellido;
    const nombre = this.regitrarUsuario.value.nombre;
    const password = this.regitrarUsuario.value.password;
    const repetPassword = this.regitrarUsuario.value.repetirPassword;
    const dir = this.regitrarUsuario.value.direccion;

    this._usuarioService.register(email,apellido,nombre,password,repetPassword,dir);
  }

}
