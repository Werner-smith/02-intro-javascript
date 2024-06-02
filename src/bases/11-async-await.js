

// const getImagenPromesa = () => new Promise (resolve => resolve('http.faoafkoafoaeo'));
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

    const apiKey = 'ZTRESMPMvLeZtjXd9UaQ5Aof5o3C2vPS';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    
    const img = document.createElement('img');
       img.src = url;
       document.body.append( img );

    } catch (error) {
        // menejo del error
        console.error(error)
    }


}

getImagen();






// peticion
// .then( resp => resp.json() )
// .then(({ data }) => {
//    const { url } = data.images.original;

 //   const img = document.createElement('img');
 //   img.src = url;

 //   document.body.append( img );


// })
// .catch( console.warn );


