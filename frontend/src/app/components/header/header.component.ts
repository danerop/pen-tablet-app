import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = false;
  @Input() email!: String;

  constructor(private afAuth: AngularFireAuth, ) {
    console.log("----usuario AUTH::::");

    this.afAuth.idToken.subscribe(data => {
      if(data != null) this.isLogged=true;
      console.log(data);
    });

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
