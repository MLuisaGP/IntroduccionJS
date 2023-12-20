const producto = "Monitor de 20 pulgadas"; //string metodo 1
const producto2 = String("Monitor de 20 pulgadas"); //string metodo 2
const producto3 = new String("Monitor de 20 pulgadas"); //string metodo3
console.log(typeof producto);//?Ver el tipo de datos de una variable
console.log(typeof producto2);//?Ver el tipo de datos de una variable
console.log(typeof producto3);//?Ver el tipo de datos de una variable

const producto4 = "Monitor de 20 pulgadas\""; //carateres especiales en los string en comillas dobles
const producto5 = 'Monitor de 20 pulgadas"'; //carateres especiales en los string en comillas simples
console.log(producto4);
console.log(producto5);


//*Metodos para las cadenas de texto
console.log(producto5.length); //?Logitud de caracteres //lwngth no es metodo en realidad es una propiedad
console.log(producto5.indexOf("de")); //?Encontrar en que posicion el caracteres dentro de un string [respuesta en este caso 8] Si es 0 o mayor es que si encontro el valor
console.log(producto5.indexOf("madera")); //?Encontrar en que posicion  el caracteres dentro de un string [respuesta en este caso -1] Si es 0 o mayor es que si encontro el valor
console.log(producto5.includes("de madera")); //?Ver si el string porposionada esta incluido dentro de la cadena de caracteres [false/true]

