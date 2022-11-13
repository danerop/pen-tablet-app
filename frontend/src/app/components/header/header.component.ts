import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = false;
  usuario : Object = new Object();
  @Input() email!: String;

  constructor(
    private afAuth: AngularFireAuth, 
    private  _usuarioService:UsuarioService) {
    
    console.log("----usuario AUTH::::");

    this.afAuth.idToken.subscribe(data => {
      if(data != null) this.isLogged=true;
      console.log(data);
    });

    _usuarioService.usuario2.subscribe((userData)=> this.isLogged = (userData))

  }

  ngOnInit(): void {
  }

  cerrarSession(){
    this.afAuth.signOut().then( () =>{
        console.log("----Sesion cerrada::::");
        this.afAuth.currentUser.then( data => {
          console.log("Usuario: "+data?.email);
        });
        this.isLogged=false;
      }
    );
  }
  
}
