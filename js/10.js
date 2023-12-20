//*Objetos

const nombreProducto = "Monitor 20 Pulgaadas";
const precio = 300;
const disponible = true;


const producto = {
    nombreProducto:"Monitor 20 Pulgaadas",
    precio:300,
    disponible:true
}
// console.log(producto.disponible);
// console.log(producto.nombreProducto);

// console.log(producto['precio']); //otra forma de imprimir los productos
//?Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//?Eliminar propiedades
delete producto.disponible;

console.log(producto);