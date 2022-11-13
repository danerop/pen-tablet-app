import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/compat/auth'; //es el que nso permite enviar los datos del form
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import{Router} from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  regitrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private router: Router,
    private firebaseError:FirebaseCodeErrorService ) {
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
    const dir = this.regitrarUsuario.value.direccion;

    if (password !== repetPassword) {
      this.toastr.error('Las contaseñas ingresadas deben ser las mismas', "Error");
      return;
    }
    this.spinner.show();
   
   
    this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=>{ //es un mentodo que pasa el email y la contraseña
      
      this.verificarCorreo();
      this.spinner.hide();

    
  }).catch((error)=>{
    console.log(error);
    this.spinner.hide();
    this.toastr.error(this.firebaseError.firebaseError(error.code),'Error');
  })
  }

  verificarCorreo(){
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
    .then(()=>{
      this.toastr.info('Le enviamos un correo electronico para su verificación','Verificar Correo');
      this.router.navigate(["/login"]);
    });

    
  }

}
