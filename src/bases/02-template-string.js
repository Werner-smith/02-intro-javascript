


const nombre = 'Werner';
const apellido = 'Lin';




// const nombreCompleto = nombre + ' ' + apellido ' ' + signo;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre )} ` );