const _firebase = require('../firebase');

module.exports = {
    getUserByEmail,
    registrarUsuario
};

async function getUserByEmail(mail){
    _firebase.auth.getUserByEmail(mail)
    .then(user => {
            console.log("Usuario obtenido --> " + user.email);
            return user;
        })
        .catch( (error)=> console.log(error));
} 

async function registrarUsuario(email, password ){
    return await _firebase.auth.createUser({
        email: email,
        password: password,
        emailVerified:false,
        disabled: false,
    });

}

async function login(email,password){
    _firebase.auth.getUserByEmail(email)
    .then(user => {
            console.log("Usuario obtenido --> " + JSON.stringify( user.toJSON()));
            return user;
        })
        .catch( (error)=> console.log(error));
}

login("manu.oyaregui@gmail.com","dsadas");