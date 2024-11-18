//para la revision me quedo con la tercera forma
//primera forma, no aconsejable si el codigo es largo por no ser flexible y reutilizable//
/*
const a= 6;
const b= 8;
const c= 9;
const d= 2;
const e= 5;
const f= 10;

const suma=(a,b,c,d,e,f) => {
    return  a+ b+ c+ d+ e+ f ;
};
console.log(suma());

const promedio=(a,b,c,d,e,f)=>{
    return (a + b + c + d + e + f ) /6;
}
console.log (promedio());

//Segunda forma  con parametros dentro de la función, sin variables globales

/* 
const suma = (a,b,c,d,e,f) => {
    return  a+ b+ c+ d+ e+ f;
};
console.log(suma(6,8,9,2,5,10));

const promedio= (a,b,c,d,e,f)=>{
    return (a+b+c+d+e+f) /6;
};
console.log(promedio(6,8,9,2,5,10));*/

//Tercera forma funcion que recibe un parametro y devuelve el resultado

function sumar  (a,b,c,d,e,f){
    return a + b + c + d + e + f;
    
}
let resultado = sumar(6,8,9,2,5,10);
console.log(resultado); 

function promedio (a,b,c,d,e,f){
    return (a+b+c+d+e+f)/6;
}

let resultado2 = promedio(6,8,9,2,5,10);
console.log(resultado2);