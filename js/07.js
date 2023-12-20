//*Orden de las operaciones

let resultado;

resultado = 20 + 30 * 2;//?80
resultado = (20 + 30) * 2;//?100
resultado = (100+200+300)* .2;
resultado = (100+200+300)* 1.16; //!sumar el impuesto del 16%
resultado = (600*2)*1.05;//! se cobra comicion del 5%


console.log(resultado);
//*Incrementos
let puntaje = 10;
puntaje++;//?incremento en uno 11
puntaje+=10;//?incremento en uno 21
++puntaje;//?incremento en uno 22
puntaje--;//?decremento en uno 21
console.log(puntaje++); //?21
console.log(++puntaje);//?23
console.log(puntaje);//?23