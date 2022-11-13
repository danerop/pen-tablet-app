import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from './firebase-code-error.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public sessionData: BehaviorSubject<Usuario> =
    new BehaviorSubject<Usuario>(new Usuario());


  constructor(
    private _http:HttpClient,
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private firebase: FirebaseCodeErrorService,
    private router: Router) {
      
     }

  signIn(email: string, password: string ) {
    
    this.afAuth.signInWithEmailAndPassword(email,password)
    .then((data)=>{

      if(data.user?.emailVerified){
      data.user?.getIdToken()
      .then( (idToken)=> {

        //console.log(idToken);
        this._http.post('/api/checkToken',  {"idToken":idToken})
        .subscribe( (value)=>{
          
        } );
        
      })
      .catch(function(error) {
        // Handle error
      });

      console.log(data);
      this.spinner.hide();
      this.toastr.success('Has iniciado sesion','Exito');
      //location.reload();
      this.router.navigate(["/listaDeProductos"]); 
    }else{
        this.router.navigate(["/verificado"])
        this.spinner.hide();
    }})
    .then( () => {
      this.afAuth.signOut().then();
    })
    .catch((error)=>{
      console.error;
      this.spinner.hide();
      this.toastr.error(this.firebase.firebaseError(error.code),'Error');
    })
  }
  
  signIn2(email:string,password:string){
    let body = {
      "email": email,
      "password": password
    }

    this._http.post<Usuario>('/api/fbLogearUsuario', body)
      .subscribe( (data) => {
        let tempUser = new Usuario();
        
        tempUser.email = data.email;
        tempUser.uid =data.uid;

        this.sessionData.next(tempUser);

        console.log(this.sessionData);
      } );
  }
}
