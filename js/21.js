//* Arrow Functions
const sumar2 =(n1,n2)=>n1+n2;
console.log(sumar2(3,4));

const aprendiendo =tecnologia=>{
    console.log(`Aprendiendo ${tecnologia}`);
    return 2;
};

console.log(aprendiendo('JavaScript'));



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

meses.forEach(mes=>{
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});

resultado = carrito.some(producto=>producto.nombre == 'celular');
console.log(resultado);

let totales = carrito.reduce( (total,producto)=>total+producto.precio,0);
console.log(totales);


let filtro = carrito.filter(producto=>producto.precio>400);
filtro = carrito.filter(producto=>producto.nombre!='Celular');
console.log(filtro);