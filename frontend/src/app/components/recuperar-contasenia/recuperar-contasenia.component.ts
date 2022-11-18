import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-contasenia',
  templateUrl: './recuperar-contasenia.component.html',
  styleUrls: ['./recuperar-contasenia.component.css']
})
export class RecuperarContaseniaComponent implements OnInit {
  recuperarUsuario: FormGroup;

  constructor(    
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private router: Router,
    private firebase: FirebaseCodeErrorService) {

      this.recuperarUsuario = this.fb.group({
        correo: ['',[Validators.required, Validators.email]]
      })
     }
     recuperar(){
        this.spinner.show();
        const email = this.recuperarUsuario.value.correo;
        
        if(email==''){
          this.toastr.info('Recuerde completar todos los campos', "Info");
        }

        this.afAuth.sendPasswordResetEmail(email).then(()=>{
          this.spinner.hide();
          this.toastr.info('Si el usuario existe se le enviara un email con un link','Exito');
          this.router.navigate(["/login"]);
        }).catch((error)=>{
          this.spinner.hide();
          this.toastr.error(this.firebase.codeError(error.code),'Error');
        })

     }

     ngOnInit(): void {
    }

}
