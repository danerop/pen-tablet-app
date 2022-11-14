import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from './firebase-code-error.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public sessionData: Subject<Usuario> = new Subject<Usuario>() ;


  constructor(
    private _http:HttpClient,
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private firebase: FirebaseCodeErrorService,
    private router: Router) {
      //Obtengo lo guardado en localStorage y lo "emito"
      this.validateUserData(this.getSessionData());
      this.sessionData.next(this.getSessionData());
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
  
  signIn2(email:string,password:string):boolean{
    let body = {
      "email": email,
      "password": password
    }

    let validation = false;

    this._http.post<Usuario>('/api/fbLogearUsuario', body)
    .subscribe({
      next: (data) =>{
        let tempUser = new Usuario();
          tempUser.email = data.email;
          tempUser.uid =data.uid;
          
          this.sessionData.next(tempUser);
          
          this.saveSessionData(tempUser);
          
          //console.log(this.sessionData);
          this.router.navigate(["/listaDeProductos"]); 
          this.toastr.success('Has iniciado sesion','Exito');
          validation = true;
      },
      error: (err) =>{
        validation=false;
        this.toastr.error(err.error,"Error");
      }
  });

    /*this._http.post<Usuario>('/api/fbLogearUsuario', body)
      .subscribe( (data) => {
        if(data.uid == null){
          validation = false;
          this.toastr.error("Usuario y/o contraseña incorrectos.","Error");
        }
        else{
          
          let tempUser = new Usuario();
          tempUser.email = data.email;
          tempUser.uid =data.uid;
          
          this.sessionData.next(tempUser);
          
          this.saveSessionData(tempUser);
          
          //console.log(this.sessionData);
          this.router.navigate(["/listaDeProductos"]); 
          this.toastr.success('Has iniciado sesion','Exito');
          validation = true;
        }

      },
      (error) =>{

      });*/
      return validation;
  }

  singOut(){
    //Borro el sessionData y "emito un usuario vacío"
    this.deleteSessionData();
    this.sessionData.next(new Usuario);

    console.log("se 'cerró sesion'");
  }

  private saveSessionData(tempUser:Usuario){
    localStorage.setItem("uid",tempUser.uid);
    localStorage.setItem("email",tempUser.email);
  }

  getSessionData(): Usuario{
    let tempUser = new Usuario();

    let emailSaved = localStorage.getItem("email");
    let uidSaved = localStorage.getItem("uid");

    if(emailSaved != null)
      tempUser.email = emailSaved;
    if(uidSaved != null)
      tempUser.uid = uidSaved;

    return tempUser;
  }

  private deleteSessionData(){
    localStorage.clear();
  }

  
  validateUserData(tempUser: Usuario) {
    this._http.post<boolean>('/api/isThisUserLoggedIn', tempUser)
    .subscribe(value =>{
      if(!value){
        console.log("LocalStorage erróneo, borrándolo...");
        this.deleteSessionData();
      }else
      console.log("LocalStorage validado.")
    })
  }
}


