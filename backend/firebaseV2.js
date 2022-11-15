const {initializeApp} = require ('firebase/app');
const auth = require('firebase/auth');


var firebaseConfig = {
    apiKey: "AIzaSyCjGMpRnooplnf424FzEQCO893EjYhlxME",
  authDomain: "pentablet-auth.firebaseapp.com",
  projectId: "pentablet-auth",
  storageBucket: "pentablet-auth.appspot.com",
  messagingSenderId: "155094952371",
  appId: "1:155094952371:web:861d5c8975da84f86a83c6"
}


const app = initializeApp(firebaseConfig);
const authApp = auth.getAuth(app);


module.exports = {
  auth,
  authApp
}
/*
async function registerUser(email,contraseña){
  return await auth.createUserWithEmailAndPassword(authApp,email,contraseña)
    .then( userCredential =>{
      return "Usuario creado correctamente --> " + JSON.stringify(userCredential.user);
    } )
    .catch((error) => {
      return "Hubo un problema.";
    });
}

async function logInUser(email,password){
  return await auth.signInWithEmailAndPassword(authApp,email,password)
    .then( userCredential => {
      return userCredential.user;
    } )
    .catch( (error) => {
      return error
    });
}

async function logOutUser(){
  return await authApp.signOut()
    .then( () =>{
      return true;
    })
    .catch( ()=> {
      return false;
    });
}


function isThisUserLoggedIn(incomingUid){
  let validation = false;
  if(authApp.currentUser != null)
    validation = authApp.currentUser.uid == incomingUid;

  return validation;
}


logInUser('manu.oyaregui@gmail.com' , 'Manumanu08')
  .then(dataLogIn => {
    
    //console.log("Usuario Logueado correctamente --> " + JSON.stringify(dataLogIn,null,'\n'));
    console.log(isThisUserLoggedIn(authApp.currentUser.uid));
    logOutUser()
      .then(dataLogOut => {
        if(dataLogOut)
          console.log("no hay ningun user logeado ahora");
        else
          console.log(isThisUserLoggedIn(authApp.currentUser.uid));
      });

  });*/

  //Podría pasarle al front el objeto dataLogin, 
  //cuando hago alguna consulta q requiera info del user
  //le pido el currentUser y lo comparo con el uid q viene del front
//console.log(isThisUserLoggedIn('sahdasjkdhkd'));