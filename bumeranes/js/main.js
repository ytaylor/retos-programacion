/*
**Enunciado**
Crea una función que retorne el número total de bumeranes de un array de números enteros 
e imprima cada uno de ellos.

- Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
en el que el primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
- En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).

**/


'use strict'
const array = [2, 1, 2, 3, 3, 4, 2, 4]; 

function countTotalBumera(array){
    let countTotal = 0; 
   //recorrer el array y hacer una subarray de tres en tres y comprobar cada elemento del array

    for (let index = 0; index < array.length; index++) 
    {
     const newArray = array.slice(index,index+3); // solo me quedo desde la posicion que estoy haste tres elemento más
        if(newArray[0]=== newArray[2] &&  newArray[0] != newArray[1] )
        {
            console.log(newArray);
            countTotal++; 
        }
   }
   return countTotal; 
}

console.log(`La cantidad total de bumeran es ${countTotalBumera(array)}`);