//*for loop

for(let i=0; i<=10; i++){
    if(i%2==0){
        // console.log(i);
    }
}

const carrito =[
    { nombre:"monitor", precio:500},
    { nombre:"television", precio:700},
    { nombre:"tablet", precio:300},
    { nombre:"audifonos", precio:200},
    { nombre:"teclado", precio:50},
    { nombre:"celular", precio:500},
    { nombre:"bocina", precio:250},
    { nombre:"laptop", precio:800},
];

for(let i=0; i<carrito.length;i++){
    // console.log(carrito[i]);
}


//*Wile loop
let x = 0;
while(x<10){
    x++;
}
// console.log(x);

//*Do while: ejecuta el codigo el codigo al menos una vez, a diferencia del while que siempre se ejecutara siempre y cuando se cumpla la condición
let i = 100;
do{
    console.log(i);
    i++;
}while(i<10);
