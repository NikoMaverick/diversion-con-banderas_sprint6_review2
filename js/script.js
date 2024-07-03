const getCountries = async (array) => {
    try {
        const response = await fetch (`https://restcountries.com/v3/all`);
        if(!response.ok) { //Lanzamos la respuesta
            throw new Error ('Se ha producido un error', response.status);//Lanzamos el error
        }
        const data = await response.json(); //El await del response
        const dataFilter = data.filter((data) => data.array == array); //Recoger el metodo del array del filter
        return dataFilter;
    } catch (error) {
        console.log('Se ha producido un error en al obtener los datos', error);
    }
};

const template = (array, country) => {
    container = document.getElementById("countries-list") //Capturar lugar de devolución.
    array.forEach(() => {
        let template = `
        <li>~${array.flags[0]}</li>
        <li>~${array.capital[0]}</li>
        <li>~${array.population}</li>
        <li>~${array.car.side}</li>
        `    });
};

getCountries().then((data) => template('array', data));

// EJERCICIO SIN TERMINAR

/*Información detallada incluye:
La bandera del país; la capital; la población; el lado de la carretera donde se circula.
flags.0 ; capital¿.0?; population; car.side.
*/