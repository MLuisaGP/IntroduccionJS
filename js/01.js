//*Variables
//!var es la forma antigua y no tan recomendable
var producto = 'Audifonos Gamer'; //?Para variables con cualquier tipo de valor
var disponible; //?iniciamos la variables pero sin valor

producto = true; //? Reasignando el valor de la variable.
disponible = true;

//?iniciamos de multiples variables
var producto1 ='Computadora',
    disponible1=true,
    categoria = 'Computadoras';

//*Reglas
//?No pueden iniciar con nuemeros
// var 1disponible;
//?No puede iniciar con signos
//var -disponible;
//?Pero con guion bajo si esta permitido
var _disponible;

//*Estilos para las variables
var nombre_producto='Monitor HD'; //underscore
var nombreProducto='Monitor HD';//Camelcase
var NombreProducto = 'Monitor HD';//Pascal Case [Solo para crear clases]
var nombreproducto ='Monitor HD';//lowercase


//*ver variables
console.log(producto);