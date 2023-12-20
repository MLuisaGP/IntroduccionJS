//* POO
//?Object literal
const producto = {
    nombre: "Tableta",
    precio:500
};

//?Object constructor
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido
}
Cliente.prototype.formatearCliente=function(){
    return `El producto ${this.nombre} ${this.apellido}`;
}
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio
}

//*Prototypes
//!Permite crear funciones que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto=function(){
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}


//?Instancia de la clase
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 300);
const cliente = new Cliente('Juan', "Alvarado");





console.log(producto3);
console.log(producto2.formatearProducto());
console.log(cliente);
console.log(cliente.formatearCliente());
// console.log(formatearProducto(producto2));

