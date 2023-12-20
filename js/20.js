//*Metodos de propiedad, son funciones en realidad pero tienen la sitaxis como metodo
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar : function(id){
        console.log(`Pausar la Cancion con el ID: ${id}`)
    },
    crearPlayList : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproducir la playlist: ${nombre}`)
    },
}
reproductor.borrarCacion = function(id){
    console.log(`Eliminando la cación: ${id}`);
}
reproductor.reproducir(3840);
reproductor.pausar(3840);
reproductor.borrarCacion(40);
reproductor.crearPlayList('Heaving Metal');
reproductor.reproducirPlayList('Heaving Metal');