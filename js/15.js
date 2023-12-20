//*Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto'];
const carrito =[
    { nombre:"monitor", precio:500},
    { nombre:"television", precio:700},
    { nombre:"tablet", precio:300},
    { nombre:"audifonos", precio:200},
    { nombre:"teclado", precio:50},
    { nombre:"celular", precio:500},
    { nombre:"bocina", precio:250},
    { nombre:"laptop", precio:800},
];

//*For Each
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});

//*Includes (Solo funciona cuando es un arreglo plano, en el caso de arreglos con objetos no se recomienda)
let resultado = meses.includes('Marzo'); //?Esta incluido Marzo en el arreglo mes
// console.log(resultado);

//!En el caso donde el arreglo no es plano se utlizan los siguientes metodos
//*some
resultado = carrito.some(producto=>producto.nombre == 'celular');//?Esta incluido Celular en el arreglo carrito

console.log(resultado);

//*reduce 
let totales = carrito.reduce( (total,producto)=>total+producto.precio,0);//! 0 es el valor inicial de total

console.log(totales);

//*filter filtrar los elementos
let filtro = carrito.filter(producto=>producto.precio>400);//* Almacena todos los productos en filtro donde su precio sea mayor a 400
filtro = carrito.filter(producto=>producto.nombre!='Celular');//* Almacena todos los productos en filtro donde su nombre NO sea celular

console.log(filtro);