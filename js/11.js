//*Objetos
const producto = {
    nombreProducto:"Monitor 20 Pulgaadas",
    precio:300,
    disponible:true
}

//*Forma anterior
const precioProductos = producto.precio; 
const nombreProductos = producto.nombreProducto; 
// console.log(nombreProductos);

//*Destructuring
const {precio} = producto;
const {nombreProducto, disponible} = producto;
console.log(disponible);