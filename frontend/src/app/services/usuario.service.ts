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
    private router: Router)
  {
    //Obtengo lo guardado en localStorage y lo "emito"
    this.validateUserData(this.getSessionData());
    this.sessionData.next(this.getSessionData());
  }

  async sendpasword(email:string):Promise<void>{
    
    if(email==''){
      this.toastr.info('Recuerde completar todos los campos', "Info");
    }

    try{
      var actionCodeSettings = {
        // After password reset, the user will be give the ability to go back
        // to this page.
        url: 'http://localhost:4200/',
        handleCodeInApp: false
      };
      return this.afAuth.sendPasswordResetEmail(email, actionCodeSettings).then(()=>{
        this.toastr.info('Si el usuario existe se le enviara un email con un link','Exito');
        this.router.navigate(["/login"]);
      }).catch((error)=>{
        this.spinner.hide();
        this.toastr.error(this.firebase.codeError(error.code),'Error');
      })
    }
    catch(err){
      console.log(err);
    }
  }

  signIn2(email:string,password:string):boolean{
    let body = {
      "email": email,
      "password": password
    }

    if(email==''&&password==''){
      this.toastr.info('Recuerde completar todos los campos', "Info");
    }

    let validation = false;

    this._http.post<Usuario>('/api/fbLogearUsuario', body)
    .subscribe({
      next: (data) =>{
        let tempUser = new Usuario();
        tempUser.email = data.email;
        tempUser.uid = data.uid;
        
        this.sessionData.next(tempUser);
        
        this.saveSessionData(tempUser);
        
        //console.log(this.sessionData);
        this.router.navigate(["/listaDeProductos"]); 
        this.toastr.success('Has iniciado sesion','Exito');
        validation = true;
      },
      error: (err) =>{
        validation = false;
        if(err.error == "El usuario no est?? verificado"){
          this.toastr.info(err.error+ ", por favor confirme el email del registro","Info");
        } else {
          this.toastr.error(this.firebase.codeError(err.error.code),"Error")
        }        
      }
    });

    return validation;
  }


  register( email:string,
            apellido:string,
            nombre:string,
            password:string,
            repeatPassword:string,
            direction:string) : boolean
  {
    let validation = false;
    if(email == '' && nombre == '' && apellido=='' && direction=='' && password =='' ){
      this.toastr.info('Recuerde completar todos los campos', "Info");
      validation =  false;
    } if (password !== repeatPassword) {
      this.toastr.error('Las contase??as ingresadas deben ser las mismas', "Error");
      validation = false;
    } else {
      this.spinner.show();
  
      let body = {
        "email": email,
        "apellido": apellido,
        "nombre": nombre,
        "password": password,
        "repeatPassword": repeatPassword,
        "direction": direction
      };
  
      this._http.post<Usuario>('/api/fbRegistrarUsuario',body)
      .subscribe({
        next: data =>{
          this.spinner.hide();
          this.router.navigate(["/listaDeProductos"]); 
          this.toastr.success('Te has registrado correctamente','Exito');
          this.toastr.info('Verifica el correo enviado a tu mail','Verificaci??n');
          validation = true;
    
        },
        error: err =>{
          this.spinner.hide();
          console.log(err.error);
          this.toastr.error(this.firebase.codeError(err.error.code),"Error")
          validation = false;
        }
      });
    }

    return validation;
  }

  singOut(){
    //Borro el sessionData y "emito un usuario vac??o"
    this.deleteSessionData();
    this.sessionData.next(new Usuario);

    console.log("se 'cerr?? sesion'");
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
        console.log("LocalStorage err??neo, borr??ndolo...");
        this.deleteSessionData();
      }else
      console.log("LocalStorage validado.")
    })
  }

  obtenerDatosDelUsuario(usuario: Usuario): Observable<Usuario>{
    return this._http.get<Usuario>('/api/getUserData?uid=' + usuario.uid);
  }



}


