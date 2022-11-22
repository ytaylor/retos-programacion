'us strict'

const carta = 'bici coche balón _playstation bici  coche peluche';

function listGifts(letter) {

    //Con el replace reemplaza 2 o mas espacios en blanco por un solo espacio.
    //Con el trim elimino los espacios al final e inicio de cada palabra
    const newLetter = letter.replace(/\s\s+/g, ' ').trim();
    const listLetters = newLetter.split(' ');

    const gift = {}

    for (const item of listLetters) {
        if (!item.startsWith('_')) {
            (gift[item] === undefined)
                ? gift[item] = 1
                : gift[item] = gift[item] + 1;
        }
    }
    return gift;
}


const regalos = listGifts(carta)
console.log(regalos)
