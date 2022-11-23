'use strict'


const isValid = letter => {
    // ¡No dejes que el Grinch gane!

    const posBegin = letter.indexOf('(');
    const posLast = letter.indexOf(')');
    const subLetter = letter.substring(posBegin + 1, posLast);
    if (subLetter.length === 0) return false;
    if (subLetter.includes('[') || subLetter.includes('{') || subLetter.includes('(')) return false;
    return true;
}

//Test
const letter1 = 'bici coche (balón) bici coche peluche'; // -> ✅
const letter2 = '(muñeca) consola bici'; // ✅

const letter3 = 'bici coche (balón bici coche'; // -> ❌
const letter4 = 'peluche (bici [coche) bici coche balón'; // -> ❌
const letter5 = '(peluche {) bici'; // -> ❌
const letter6 = '() bici'; // ❌

console.log(isValid(letter3));