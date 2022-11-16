const _fb2 = require('../firebaseV2');
const db = require("../database");
const carritoController = require("./carritoController");

module.exports = {
    registerUser,
    logInUser,
    logOutUser,
    isThisUserLoggedIn
};

//Firebase
async function registerUser(email, contraseña, usuario){
  return await _fb2.auth.createUserWithEmailAndPassword(_fb2.authApp,email,contraseña)
    .then( userCredential =>{ //Si se creó correctamente
      _fb2.auth.sendEmailVerification(userCredential.user) //Envia el mail de verificación
      .then( () => {
        
        saveNewUserInDb(userCredential.user.uid, usuario); //Se guarda el usuario dentro de la base de datos
        carritoController.postCarrito(userCredential.user.uid); //Se le crea un carrito al usuario nuevo

        return userCredential;
      })
      .catch ((err) => {throw err});
      
    })
    .catch( (error) => {
      throw error;
    });
}

async function logInUser(email,password){
  return await _fb2.auth.signInWithEmailAndPassword(_fb2.authApp,email,password)
    .then( userCredential => {
      if(userCredential.user.emailVerified)
        return userCredential.user;
      else
        throw 'El usuario no está verificado'
    } )
    .catch( (error) => {
      throw error;
    });
}

async function logOutUser(){
  return await _fb2.authApp.signOut()
    .then( () =>{
      return true;
    })
    .catch( ()=> {
      return false;
    });
}


function isThisUserLoggedIn(incomingUid){
  let validation = false;
  if(_fb2.authApp.currentUser != null)
    validation = _fb2.authApp.currentUser.uid == incomingUid;

  return validation;
}


async function saveNewUserInDb(userUid, user){
  let query =
  `INSERT INTO usuarios (uid, nombre, apellido, direccion, email) VALUES
  ("${userUid}", "${user.nombre}", "${user.apellido}", "${user.direction}", "${user.email}")`;

  await db.abm(query);
}