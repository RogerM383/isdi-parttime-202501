// Función personalizada para sustituir a includes()

function myIncludes(array, element) { 
    for (var i = 0; i < array.length; i++) { 
        if (array[i] === element) { 
            return true; // Si el elemento está en el array, retorno `true`
        }
    }
    return false; // Si no lo encuentro después de recorrerlo, retorno `false`
}

// Defino los arrays para probar mi función
var cities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var testCities = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];

// Uso el método original y mi función personalizada
var controlResult1 = testCities.includes('Madrid');
var controlResult2 = myIncludes(cities, 'Madrid');

// Comprobación: Verifico si los valores son iguales
console.assert(
    controlResult1 === controlResult2,
    'Error: Los resultados no coinciden'
);

// Imprimo los resultados en consola para verificarlos
console.log("Array original:", cities);
console.log("Array de prueba:", testCities);
console.log("Resultado con includes():", controlResult1);
console.log("Resultado con myIncludes():", controlResult2);