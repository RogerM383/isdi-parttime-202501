// Función personalizada para sustituir fill()

function myFill(array, fill, start, end) {  
    if (start === undefined) start = 0; // Si no se proporciona `start`, comienza desde el índice 0
    if (end === undefined) end = array.length; // Si no se proporciona `end`, termina en el último índice del array

    if (start < 0) start = array.length + start; // Convierte índices negativos en positivos
    if (end < 0) end = array.length + end;

    if (start < 0) start = 0; // Ajusta los valores fuera de rango
    if (end > array.length) end = array.length;

    for (var i = start; i < end; i++) { 
        array[i] = fill; // Sustituyo los valores en esas posiciones
    }

    return array; // Devuelvo el array modificado
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.fill('Bilbao', 0, 2);
var controlResult2 = myFill(cities, 'Bilbao', 0, 2);

// Comprobación: Verifico si los valores son iguales
console.assert(
    JSON.stringify(controlResult1) === JSON.stringify(controlResult2),
    'Error: Los arrays llenados no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original después de myFill():", cities);
console.log("Array de prueba después de fill():", testCities);
console.log("Resultado con fill():", controlResult1);
console.log("Resultado con myFill():", controlResult2);