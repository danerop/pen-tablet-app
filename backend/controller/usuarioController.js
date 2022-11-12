const _firebase = require('../firebase');

module.exports = {
    getUserByEmail
};

async function getUserByEmail(mail){
    _firebase.auth.getUserByEmail(mail)
    .then(user => {
            return user;
        })
        .catch( (error)=> console.log(error));
}    

getUserByEmail("ahre@gmail.com");

