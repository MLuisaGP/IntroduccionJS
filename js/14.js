//*Arreglos
const numeros = [10,20,30,40,50];



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto'];


numeros[5]= 60; //?agrega elementos al arreglo
numeros[2]= 60; //?modifical elementos del arreglo

numeros.push(70); //?agrega elementos al final del arreglo
numeros.push(80,90,100); //?agrega elementos al final del arreglo

numeros.unshift(-10,-20, -30)//?lo agrega al inicio

console.table(numeros); //?Muesta en consola en forma de tabla

meses.pop(); //?Elimina el ultimo elemento del arreglo
meses.shift();  //?Elimina el primero del arreglo
meses.splice(2, 1); //?Elimina solamente el elemento que se encuentra en el indice 2[abril]
console.table(meses);

//!Se recomienda no modificar el arreglo original por lo que se utiliza lo siguiente
//*Rest Operator o Spreed Operator
const nuevoArreglo =[...meses, 'Septiembre']; //?Equivalente al push
const nuevoArreglo2 =['Enero',...meses, ]; //?Equivalente al shift
console.table(nuevoArreglo2);

