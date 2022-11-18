import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code:string){
    
  switch(code){
    case 'auth/email-already-in-use': //correo existe
      return 'El usuario ya existe';
    //case'auth/weak-password': //contaseña debil
    //  return 'La contraseña debe tener 6 caracteres';
    //case 'auth/invalid-email': //email invalido por formato
    //  return 'El email tiene formato erroneo o está vacio';
   // case 'auth/missing-email': //email vacio
    //  return 'El campo email no puede estar vacio'  ;
   // case 'auth/internal-error': //contraseña vacio
    //  return 'La contraseña no puede estar vacia' ;
   //   case 'auth/user-not-found': //Login contraseña erronea o usuario
   //     return 'Usuario erroneo';
      case'auth/wrong-password':  //contraseña erronea
        return 'Contraseña erronea';
   //   case 'auth/invalid-email':
   //   return 'Por favor ingrese un email valido'; //email sin formato
   //   case 'auth/internal-error':
   //     return 'Error deconocido, comuniquese con el equipo'  ;
    default :
     return 'Campos incompletos'; //realmente puede deberse a que no tiene Email, contraseña o directamente fallo firebase
  }
}
}
