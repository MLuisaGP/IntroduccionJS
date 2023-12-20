//*Variables con let  es la sintaxis moderna y recomendada
let producto = 'Audifonos Gamer'; //?Para variables con cualquier tipo de valor
let disponible; //?iniciamos la variables pero sin valor

producto = true; //? Reasignando el valor de la variable.
disponible = true;

//?iniciamos de multiples variables
let producto1 ='Computadora',
    disponible1=true,
    categoria = 'Computadoras';

//*Reglas
//?No pueden iniciar con nuemeros
// let 1disponible;
//?No puede iniciar con signos
//let -disponible;
//?Pero con guion bajo si esta permitido
let _disponible;

//*Estilos para las variables
let nombre_producto='Monitor HD'; //underscore
let nombreProducto='Monitor HD';//Camelcase
let NombreProducto = 'Monitor HD';//Pascal Case [Solo para crear clases]
let nombreproducto ='Monitor HD';//lowercase


//*ver variables
console.log(producto);