// Función personalizada para sustituir push()

function myPush(array, elementToPush) { 
    array[array.length] = elementToPush; // Agrego el elemento en la última posición del array
    return array.length; // Devuelvo la nueva longitud del array
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var cityToPush = 'Bilbao';

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.push(cityToPush);
var controlResult2 = myPush(cities, cityToPush);

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Las longitudes de los arrays no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original después de myPush():", cities);
console.log("Array de prueba después de push():", testCities);
console.log("Nueva longitud del array con push():", controlResult1);
console.log("Nueva longitud del array con myPush():", controlResult2);