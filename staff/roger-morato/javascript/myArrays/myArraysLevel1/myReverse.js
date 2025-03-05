// Función personalizada para sustituir reverse()

function myReverse(array) { 
    var left = 0; 
    var right = array.length - 1;

    while (left < right) { 
        var temp = array[left]; 
        array[left] = array[right]; 
        array[right] = temp; 

        left++; 
        right--; 
    }

    return array; // Modifica el array original
}

// Defino los arrays de ciudades
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método oficial y mi función personalizada
var controlResult1 = testCities.reverse();
var controlResult2 = myReverse(cities);

// Comprobación: Verifico si los valores son iguales
console.assert(
    JSON.stringify(controlResult1) === JSON.stringify(controlResult2),
    'Error: Los arrays invertidos no coinciden'
);

// Imprimo los resultados en consola
console.log("Array original después de myReverse():", cities);
console.log("Array de prueba después de reverse():", testCities);
console.log("Resultado con reverse():", controlResult1);
console.log("Resultado con myReverse():", controlResult2);