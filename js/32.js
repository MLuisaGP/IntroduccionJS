//* Async / await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes... espere...');
        setTimeout(() => {
            resolve(('Los clientes fueron descargados'))
        }, 5000);
    });
}


function descargadosUltimosPedidos(){
    return new Promise(resolve =>{
        console.log('Descargando pedidos... espere...');
        setTimeout(() => {
            resolve(('Los pedidos fueron descargados'))
        }, 3000);
    });
}


// //*Retardo de 5 segundos para que se ejecute el codigo, el valor que se pone al final esta en ms (en este caso se puso 5000ms)
// setTimeout(() => {
//     console.log(('set timeout...'))
// }, 5000);
// //* Ejecutara la funcion en intervalos de 3 segundos
// setInterval(() => {
//     console.log(('set timeout...'))
// }, 3000);


//* Funcion asincrona
async function app(){
    try {
        // const resultado = await  descargarNuevosClientes();//?donde este el promise se le pondra el await
        // const pedidos = await descargadosUltimosPedidos();
        // console.log(resultado);
        // console.log(pedidos);
        // console.log('Este código si se bloquea');
        const resultado = await Promise.all([descargarNuevosClientes(), descargadosUltimosPedidos()]);//?Mejora el performas ya que las dos funciones son ejecutadas al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();
console.log('Este código no se bloquea');