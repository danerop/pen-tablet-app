import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = false;
  usuario : Usuario = new Usuario();
  @Input() email!: String;

  constructor(
    private afAuth: AngularFireAuth, 
    private  _usuarioService:UsuarioService) {
    
/*
    this.afAuth.idToken.subscribe(data => {
      if(data != null) this.isLogged=true;
      console.log(data);
    });*/

    _usuarioService.sessionData
    .subscribe((userData)=> {
      this.usuario = userData;
      this.isLogged = (userData.uid != null);
    });

  }

  ngOnInit(): void {
  }

  cerrarSession(){
    /*this.afAuth.signOut().then( () =>{
        console.log("----Sesion cerrada::::");
        this.afAuth.currentUser.then( data => {
          console.log("Usuario: "+data?.email);
        });
        this.isLogged=false;
      }
    );*/

  }
  
}
