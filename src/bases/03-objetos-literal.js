

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: '23',
    direccion: {
        ciudad:'New York',
        zip: 215151,
        lat: 14.0241,
        lng: 320.22441,
    }
};


//console.table( persona );
console.log( persona );

const persona2 = { ...persona};
persona2.nombre = 'peter';

console.log(persona2 )







