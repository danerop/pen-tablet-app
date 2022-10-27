import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/compat/auth'; //es el que nso permite enviar los datos del form

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  regitrarUsuario: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {
    this.regitrarUsuario=this.fb.group({
      email:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      password:['',Validators.required],
      repetirPassword:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const email = this.regitrarUsuario.value.email;
    const apellido = this.regitrarUsuario.value.apellido;
    const nombre = this.regitrarUsuario.value.nombre;
    const password = this.regitrarUsuario.value.password;
    const repetPassword = this.regitrarUsuario.value.repetirPassword;

    this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=>{ //es un mentodo que pasa el email y la contraseña
      console.log(user);
    
  }).catch((error)=>{
    console.log(error);
  })
  }
}