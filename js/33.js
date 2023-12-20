//*Fetch Api
async function obtenerEmpleados(){
    const archivo = 'database/empleados.json';
    // fetch(archivo)
    //     .then(resultado => resultado.json())//?El resultado va a ser un json
    //     .then(datos=>{
    //         // console.log(datos.empleados);
    //         const {empleados}=datos;
    //         console.log(empleados);
    //         // empleados.forEach(empleado => {
    //         //     console.log(empleado.nombre);
    //         //     console.log(empleado.id);
    //         //     console.log(empleado.puesto);
    //         //     //*Mostrar el resultado en el html
    //         //     // document.querySelector('.contenido').textContent += empleado.nombre
    //         // });
    //     }
    //         )
    const resultado = await fetch(archivo); 
    const datos = await resultado.json();//!Aqui si usamos el await en vez del promiseall ya que esta depende de la anterior. El promiseAll se usa solamente cuando no dependen una de la otra
    console.log(datos);
}
obtenerEmpleados();