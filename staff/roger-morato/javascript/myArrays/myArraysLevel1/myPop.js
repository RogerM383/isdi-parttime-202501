// Función personalizada para sustituir a pop()

function myPop(array) { 
    if (array.length === 0) return undefined; // Si el array está vacío, devuelvo `undefined`

    var pop = array[array.length - 1]; // Guardo el último elemento antes de eliminarlo
    array.length--; // Reduzco la longitud del array para eliminar el último elemento
    return pop; // Devuelvo el elemento eliminado
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.pop();
var controlResult2 = myPop(cities);

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Los resultados no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original después de myPop():", cities);
console.log("Array de prueba después de pop():", testCities);
console.log("Elemento eliminado con pop():", controlResult1);
console.log("Elemento eliminado con myPop():", controlResult2);