const getCountries = async (array) => {
    try {
        const response = await fetch (`https://restcountries.com/v3/all`);
        if(!response.ok) { //Lanzamos la respuesta
            throw new Error ('Se ha producido un error', response.status);//Lanzamos el error
        }
        const data = await response.json(); //El await del response
        //console.log(data) 
        const dataFilter = data.filter((data) => data.array == array); //Recoger el metodo del array del filter
        return dataFilter;
    } catch (error) {
        console.log('Se ha producido un error en al obtener los datos', error);
    }
};
getCountries();

const template = (array, country) => {
    container = document.getElementById("countries-list") //Capturar lugar de devolución.
    array.forEach(() => {
        const template = `
        <li>
            <img src= ${array.flags[0]}
            <h2${array.altSpelling[2]}</h2>  
            <p><span>Capital: </span>${array.capital[0]}</p>
            <p><span>Población: </span>${array.population}</p>     
            <p><span>Lado de conducción: </span>${array.car.side}</p>
        </li>
        `    
    });
};

getCountries().then((data) => template('array', data));

// EJERCICIO SIN TERMINAR

/*Información detallada incluye:
La bandera del país; la capital; la población; el lado de la carretera donde se circula.
altSpelling.2; flags.0 ; capital¿.0?; population; car.side.
*/