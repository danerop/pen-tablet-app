const _firebase = require('../firebase');

module.exports = {
    getUserByEmail,
    registrarUsuario,
    validateToken,
    createSessionCookie
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
            console.log("Usuario obtenido --> " + JSON.stringify( user));
            return user;
        })
        .catch( (error)=> console.log(error));
}

async function validateToken(idToken){
    _firebase.auth.verifyIdToken(idToken)
    .then( (decodedUid) => {
        
        _firebase.auth.getUser(decodedUid.uid)
        .then((data) => {
            return true;
        })
        .catch(error => {
            return false;
        });
        
    }).catch(error=>{
        return false;
    })
}

async function createSessionCookie(idToken, expiresIn){
    return await _firebase.auth.createSessionCookie(idToken,{ expiresIn })
    .then(cookie => {
        return cookie;
    })
}

//let str = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGVudGFibGV0LWF1dGgiLCJhdWQiOiJwZW50YWJsZXQtYXV0aCIsImF1dGhfdGltZSI6MTY2ODI5NzcwNSwidXNlcl9pZCI6IlJkV0FsOEZFUlZYbFVpTlNZeVZhSmFkRGtieDIiLCJzdWIiOiJSZFdBbDhGRVJWWGxVaU5TWXlWYUphZERrYngyIiwiaWF0IjoxNjY4Mjk3NzA1LCJleHAiOjE2NjgzMDEzMDUsImVtYWlsIjoibWFudS5veWFyZWd1aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtYW51Lm95YXJlZ3VpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZlatqTDO0JlkSpdwEJbiOxTR3AfXCXwgZ2BdDLX2RQFSopDSuaZU9g8p2-XiPuloD440OU6uOhPZqsDkNOgc-rZGgThlAKjPKL32XLIab5QDrSDbGqJAxSVBDQsxAuL74meZ_qeo6bp8-6920Pda2GsP_gk4ljm7GaWR6qtIl3pCpHHrp0DCT9ApY2SsXQEXMUXzmV-WWCJTMPhjJBHIXSptJGk7a6VSPZTXqE4kKSqJEypZY9LACNSQMtO422VbGIvz0YEtxp58J4SA2YheO49Az9HZlFSW6pjpMe5Ze8IyDqPEk1bjA64guIx_2Y8BH8XTO9Idynsw4Jyg-dQzaw";

//validateToken(str);