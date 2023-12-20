//*Arreglos
const numeros = [10,20,30,40,50];

console.table(numeros); //?Muesta en consola en forma de tabla

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);
// const arreglo = ["Hola", 12, true, "string", null, {nombre: "Luisa", trabajo:"Desarrolladora de Sistemas"},[1,2,3,4,5]];
// console.table(arreglo);

//*Acceder a los valores
console.log(numeros[3]);
console.log(numeros[30]); //?undefined

//*Conocer la extensión de un arreglo
console.log(meses.length); //?Cantidad de elementos dentro del elemento[5]


//*Aceder a todos los valores
meses.forEach(
    function(mes){
        console.log(mes)
    }
)