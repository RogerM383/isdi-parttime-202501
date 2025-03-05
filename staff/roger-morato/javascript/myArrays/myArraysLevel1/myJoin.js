// Función personalizada para sustituir a join()

function myJoin(array, separator) {  
    if (array.length === 0) return ''; // Si el array está vacío, devuelvo un string vacío

    var join = ''; // Inicializo un string vacío donde concatenaré los elementos

    for (var i = 0; i < array.length; i++) { 
        if (i > 0) { 
            join += separator; // Agrego el separador entre elementos
        }
        join += array[i]; // Agrego el elemento actual
    }

    return join; // Devuelvo el string resultante
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.join(' - ');
var controlResult2 = myJoin(cities, ' - ');

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Los resultados no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original:", cities);
console.log("Array de prueba:", testCities);
console.log("Resultado con join():", controlResult1);
console.log("Resultado con myJoin():", controlResult2);