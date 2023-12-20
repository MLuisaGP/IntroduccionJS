//* Notification API
//?document hace referencia a todo nuestro html que esta en nuestro sitio web
const boton=document.querySelector('#boton');//?querySelector es como vas a selecionar contenido html [Se pone el # para ser referencia a un id]
//*Eventos
//? 1. Hay que selecionar el elemento que se le dara un evento
//? addEventListener es la funcion que nos va a permitir registrar un evento a esta variable de boton.
//? Los dos parametros que vamos a poner en el addEventListener son el evento que vamos a escuchar(En este caso el click)
//? y el segundo es la acción que va hacer al escuchar el evento.

boton.addEventListener('click', ()=>{
    Notification.requestPermission() //?Notidication maneja automaticamente los promise
        .then(resultado=>console.log(`El resultado es: ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification(' Esta es una notificacion',{
        icon: 'img/Logo-GS-Para-Fondo-Blanco-v1.png',
        body: 'Código con Juan, los mejores tutoriales'
    });
}