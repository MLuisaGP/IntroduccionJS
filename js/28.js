//*Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }
    obtenerPrecio(){
        console.log(`$${this.precio}`);
    }
}

const producto = new Producto("Laptop", 39000);
console.log(producto);
console.log(producto.formatearProducto());

//*Herencias
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn;
    }
    
    formatearProducto(){
        return `${super.formatearProducto()} y su isbnn es ${this.isbn}`;
    }
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Y si hay en existencia')
    }

}
const libro = new Libro('Plan B', 450, "Asvc-2345");
console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());