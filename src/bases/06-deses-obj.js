
// Destructuracion
// Asignacion de Destruturacion
const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
};

const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    

    // console.log(nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.0124,
            lng: -12.2456
        }
    }
}



const { nombreClave, anios, latlng:{ lat, lng} } = useContext ( persona );

console.log(nombreClave, anios);
console.log(lat, lng);