//*Funciones



//*Declaracion de las funciones
sumar();//?Llamar la funcion
function sumar(){//!Se inicializa en la etapa de registro o creacion del codigo
    console.log(10*10)
}

// sumar2(); //!Marcara error
//*Expreción de la función 
const sumar2 = function(){//!Se inicializa en la etapa de ejecución de codigo ya que lo define como una variable
    console.log(3+3);
}
sumar2();

//*IIFE funciones que se llaman a ellas mismas
//!Este tipo de funcion no se recomienda para reutilizarce ya que sirven para proteger las variables de ser llamadas en otras funciones
(function(){
    console.log('Esta es una funcion');
})();
 //?La funcion se encuentra en la carpeta otro.js
// console.log(cliente); marcara error


//!Java script se ejecuta en dos etapas.
//!La primera es la de registro o creación, donde se registran las funciones
//! la segunda es la de ejecución donde se ejecuta el codigo


