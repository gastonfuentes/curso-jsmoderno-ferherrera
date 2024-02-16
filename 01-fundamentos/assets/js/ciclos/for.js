


const heroes = ['Batman', 'Mujer maravilla', 'Superman', 'Aquaman'];

console.warn('FOR tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


console.warn('FOR IN');

for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('FOR OFF');

for (let heroe of heroes) {
    console.log(heroe);
}