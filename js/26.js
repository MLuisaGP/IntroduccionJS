//*This

window.nombre ='Nombre desde window';
const reservacion ={
    nombre:' Luisa',
    apellido: 'Galaz',
    total:5000,
    pagado:false,
    informacion:function(){
        return `Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`
    },
    informacionWindow:()=> `Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}` //!si usamos la funcion flecha el this se referira a windows (la ventana global) [total seria undefined y nombre  nombre desde windows]
};
console.log(reservacion.informacion());
console.log(reservacion.informacionWindow());