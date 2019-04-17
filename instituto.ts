import { Alumno } from './alumno';
import { Cursada } from './cursada';

const alumno1: Alumno = {
    legajo: 123,
    nombre: 'Pepe'
}
const alumno2: Alumno = {
    legajo: 321,
    nombre: 'Juan'
}

const cursada: Cursada = {
    nombre: 'Matematica',
    alumnos: []
}

cursada.alumnos.push(alumno1);
cursada.alumnos.push(alumno2);

console.log('Cursada: ' + cursada.nombre);
console.log(cursada.alumnos.length + ' alumnos.');

let ordenAlumno = 1;
for(const alumno of cursada.alumnos) {
    console.log(ordenAlumno + '- Alumno: ' + alumno.nombre + '. Legajo: ' + alumno.legajo);
    ordenAlumno++;
}