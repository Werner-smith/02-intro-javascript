
// Funciones en JS
//const saludar = function saludar ( nombre ) {
//   return `Hola, ${ nombre }`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;



// console.log( saludar('Werner') )

console.log( saludar2 ('Werner') );
console.log( saludar3 ('Lin') );
console.log(saludar4() );

const getUser = () =>({
        uid: 'ABC123',
        username: 'Sr.stark123'
});


const user = getUser()
console.log(user);

// Tarea
// 1. Trasformar a una funcion de flecha
// 2. Tiene que trasformar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = (nombre) =>({
        uid: 'ABC123',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Werner');
console.log(usuarioActivo );




