//const _firebase = require('../firebase');
const _fb2 = require('../firebaseV2');
const admin = require('../firebase');

module.exports = {
    /*getUserByEmail,
    registrarUsuario,
    validateToken,
    createSessionCookie*/
    registerUser,
    logInUser,
    logOutUser,
    isThisUserLoggedIn
};



//FirebaseV2
async function registerUser(email,contraseña){
    return await _fb2.auth.createUserWithEmailAndPassword(_fb2.authApp,email,contraseña)
      .then( userCredential =>{ //Si se creó correctamente
        _fb2.auth.sendEmailVerification(userCredential.user) //Envia el mail de verificación
        .then( () => {
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