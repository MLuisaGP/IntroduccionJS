//*Promise
const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = false;
    if(auth){
        resolve('Usuario Autenticado');//El promise se cumple
    }else{
        reject('No se pudo iniciar sesión');// el promise no se cumple
    }
})

console.log(usuarioAutenticado);
//?En los promises existen tres valores: 
//?         pending: no se a cumplido ni se a rechazado, esta en espera
//?         fulfilled: ya se cumplio el promise
//?         rejected: se ha rechazado o no se pudo cumplio el promise


usuarioAutenticado
    .then(value=>console.log(value))         //*Utiliza el promise y despues haz algo
    .catch(reason=>console.log(reason))         //*Si es rechazado el promise entonces haz esto.
