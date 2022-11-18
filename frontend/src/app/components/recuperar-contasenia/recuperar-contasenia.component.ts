import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import{FormControl} from '@angular/forms' 

@Component({
  selector: 'app-recuperar-contasenia',
  templateUrl: './recuperar-contasenia.component.html',
  styleUrls: ['./recuperar-contasenia.component.css'],
  providers:[UsuarioService],
})
export class RecuperarContaseniaComponent implements OnInit {
  recuperarUsuario: FormGroup;
  userEmail = new FormGroup(''); //asocio esta instancia al input

  constructor(    
    private fb: FormBuilder, 
    private authS: UsuarioService)
  {
    this.recuperarUsuario = this.fb.group({
      userEmail: ['',[Validators.required, Validators.email]],
    })

  }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.userEmail; //almaceno el valor del form 
    this.authS.sendpasword(email);

  }
}
