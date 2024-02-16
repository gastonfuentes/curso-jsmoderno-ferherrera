


const elMayor = (a, b) => a > b ? a : b

console.log(elMayor(3, 5));

const tieneMembresia = (miembro) => miembro ? '2 dolares' : '10 dolares';

console.log(tieneMembresia(false));



const amigo = true

const amigosArr = [
    'peter',
    'tony',
    'misho',
    amigo ? 'thor' : 'loky',
    elMayor(14, 40)
]

console.log(amigosArr);


const nota = 85.5;
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' : 'F reprovado'

console.log(nota, grado);