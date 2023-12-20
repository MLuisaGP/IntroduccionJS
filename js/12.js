"use strict" //ejecuta el codigo de js de forma estricta
//*Objetos
const producto = {
    nombreProducto:"Monitor 20 Pulgaadas",
    precio:300,
    disponible:true
}

//?Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
//?Para prevenir que se esten agregando nuevas propiedades al objeto utilizamos freeze
// Object.freeze(producto);//?Congela el producto para que no se agregen nuevas propiedades, eliminarlas, ni modificar valores

 // producto.stock = 20;//?Ya no se agrega esta propiedad
// console.log(Object.isFrozen(producto))//?Metodo para ver si un objeto esta congelado[true]
Object.seal(producto);//?Tampoco permite agregar nuevas propiedades ni eliminarlas pero si permite modificar las propiedades existentes
producto.precio = 400;
console.log(Object.isSealed(producto))//?Metodo para ver si un objeto esta en modo sellado[true]



console.log(producto);