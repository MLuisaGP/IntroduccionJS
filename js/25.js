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


//*for each: se usa para interar un listado y quieres mostrarlos solamente en pantalla o consola se usa el each
let a = carrito.forEach((producto)=>producto);
console.log(a);//!mostrara undefined ya que for each es tipo void
//*map: se usa para crear un nuevo arreglo
let ar = carrito.map((producto)=>producto.nombre);
console.log(ar);