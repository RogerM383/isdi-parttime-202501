// Función personalizada para sustituir a indexOf()

function myIndexOf(array, element) { 
    for (var i = 0; i < array.length; i++) { 
        if (array[i] === element) { 
            return i; // Si el elemento está en el array, retorno la posición donde se encuentra
        }
    }
    return -1; // Si no lo encuentro después de recorrerlo, retorno -1
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.indexOf('Madrid');
var controlResult2 = myIndexOf(cities, 'Madrid');

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Los resultados no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original:", cities);
console.log("Array de prueba:", testCities);
console.log("Resultado con indexOf():", controlResult1);
console.log("Resultado con myIndexOf():", controlResult2);