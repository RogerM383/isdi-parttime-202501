// Función personalizada para sustituirlastIndexOf()

function myLastIndexOf(array, element) { 
    for (var i = array.length - 1; i >= 0; i--) { 
        if (array[i] === element) { 
            return i; // Si el elemento está en el array, retorno la última posición donde se encuentra
        }
    }
    return -1; // Si no lo encuentro después de recorrerlo, retorno -1
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Madrid'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Madrid'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.lastIndexOf('Madrid');
var controlResult2 = myLastIndexOf(cities, 'Madrid');

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Los resultados no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original:", cities);
console.log("Array de prueba:", testCities);
console.log("Resultado con lastIndexOf():", controlResult1);
console.log("Resultado con myLastIndexOf():", controlResult2);