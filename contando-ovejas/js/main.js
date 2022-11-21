'us strict'

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
];

function contarOvejas(ovejas) {
    ovejas = ovejas.filter(item => item.color.toLowerCase() === 'rojo' && item.name.toLowerCase().includes('n') && item.name.toLowerCase().includes('a'))
    return ovejas
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)