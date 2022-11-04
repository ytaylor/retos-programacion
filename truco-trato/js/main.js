/*- Enunciado: Este es un reto especial por Halloween.
- Deberemos crear un programa al que le indiquemos si queremos realizar "Truco
- o Trato" y un listado (array) de personas con las siguientes propiagees:
- - name de la niña o niño
- - age
- - Altura en centímetros
-
- Si las personas han pedido truco, el programa retornará sustos (aleatorios)
- siguiendo estos criterios:
- - Un susto por cada 2 letras del name por persona
- - Dos sustos por cada age que sea un número par
- - Tres sustos por cada 100 cm de altura entre todas las personas
- - Sustos: 🎃 👻 💀 🕷 🕸 🦇
-
- Si las personas han pedido trato, el programa retornará dulces (aleatorios)
- siguiendo estos criterios:
- - Un dulce por cada letra de name
- - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
- - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
- - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
    \*/

'use strict';

const type = "Truco";
const listUsers = [
    {
        name: "Ana",
        age: 10,
        tall: 150
    },
    {
        name: "Maria",
        age: 5,
        tall: 90
    }, {
        name: "Juana",
        age: 8,
        tall: 121
    }, {
        name: "Lisbet",
        age: 9,
        tall: 130
    }
];
const iconsTrick = ['🎃', '👻', '💀', '🕷', '🕸', '🦇'];
const iconsDeal = ['🍰', ' 🍬', '🍡', '🍭', '🍪', '🍫', '🧁', '🍩'];

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const getRandomIcons = (listIcons, number) => {
    for (let index = 0; index < number; index++) {
        const randomIcon = getRandomNumber(listIcons.length);
        console.log(listIcons[randomIcon - 1]);
    }
}

/*- Si las personas han pedido truco, el programa retornará sustos (aleatorios)
- siguiendo estos criterios:
- - Un susto por cada 2 letras del name por persona
- - Dos sustos por cada age que sea un número par
- - Tres sustos por cada 100 cm de altura entre todas las personas
- - Sustos: 🎃 👻 💀 🕷 🕸 🦇*/

const giveMeTrick = () => {

    let countAge = 0;
    let sumTall = 0;
    let sumLetters = 0;

    for (const item of listUsers) {

        //Contar las letras por persona
        sumLetters += item.name.length;
        //Un susto por cada 2 letras del name por persona
        const numberIconsLetters = sumLetters / 2;
        getRandomIcons(iconsTrick, numberIconsLetters);

        //Cuento solo aquellas edades que son pares
        if (item.age % 2 === 0) {
            countAge++;
        }
        // Dos sustos por cada age que sea un número par
        getRandomIcons(iconsTrick, countAge * 2);

        //Sumo todas las edades
        sumTall += item.tall;
    }
    //Tres sustos por cada 100 cm de altura entre todas las personas
    const numberIconsTall = sumTall / 100;
    getRandomIcons(iconsTrick, numberIconsTall * 3);

}


/*Si las personas han pedido trato, el programa retornará dulces (aleatorios)
- siguiendo estos criterios:
- - Un dulce por cada letra de name
- - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
- - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
- - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩*/

function giveMeDeal() {
    let countAge = 0;
    let sumTall = 0;
    let sumLetters = 0;

    for (const item of listUsers) {

        //Contar las letras por persona
        sumLetters += item.name.length;
        //Un dulce por cada letra de name
        getRandomIcons(iconsDeal, sumLetters);

        // Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
        if (item.age <= 10) {
            countAge = item.age / 3;
            getRandomIcons(iconsDeal, countAge);

        }

        //Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
        if (item.tall <= 150) {
            const numberIconsTall = item.tall / 50;
            getRandomIcons(iconsDeal, numberIconsTall * 2);
        }
    }
}

//Ejecuto una función u otra en dependencia del tipo de Truco
type === 'Truco' ? giveMeTrick() : giveMeDeal();
