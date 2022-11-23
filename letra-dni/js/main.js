'use strict'

/**
Vamos a desarrollar una aplicación que recibirá el número identificador de tu DNI y te devolverá la correspondiente letra.

Pasos a seguir:

1. Solicitamos al usuario que introduzca su DNI sin letra y los almacenamos en una constante.
Hacer un alert de los datos introducidos (el dni en este caso).
2. Creamos una función para obtener la letra del dni. El parámetro de entrada de esta función será el número recogido del usuario.
3. La función hará las siguientes validaciones.
Si la validación es incorrecta, la función devolverá el valor null.
    - Que el número recogido como parámetro tenga 8 dígitos exactamente.
    - Que el número recogido como parámetro sea un número (y por tanto no tenga letras).

    Si la validación ha sido correcta, la función utilizará el siguiente algoritmo para calcular la letra del DNI:
      - Dividimos el valor introducido entre 23. Almacenamos el resto de la división.
      - Utilizamos la función charAt para obtener la letra del DNI. Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
4. Llamamos a la función.
5. Mostrar el resultado: en un log
 */

const numberDni = prompt("Dime tu numero de DNI sin letra");
alert(numberDni);

const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
function getLetter(numberDni) {
    let result = null;
    if (numberDni.length === 8 && !isNaN(numberDni)) {
        const rest = numberDni % 23;
        result = letters.charAt(rest);
    }
    return result;

}

console.log(getLetter(numberDni));