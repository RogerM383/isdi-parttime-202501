// Función personalizada para sustituir a concat()

function myConcat(array1, array2) {  
    var concat = []; 
    var index = 0; 

    // Recorro el primer array y copio sus elementos en un nuevo array (el que contendrá los elementos concatendados)
    for (var i = 0; i < array1.length; i++) {
        concat[index] = array1[i]; 
        index++; // Incremento el índice para que el siguiente elemento se guarde en la última posición
    }

    // Recorro el segundo array y copio sus elementos en el array concatenado al que ya he insertado los elementos del array1 en el bucle for anterior.
    for (var j = 0; j < array2.length; j++) {
        concat[index] = array2[j]; 
        index++; 
    }

    return concat; // Devuelvo el nuevo array combinado
}

// Defino los arrays de ciudades
var cities1 = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'];
var cities2 = ['Bilbao', 'Granada', 'Málaga', 'Zaragoza'];

// Uso el método original y mi función personalizada para comprobar su correcto funcionamiento
var controlResult1 = cities1.concat(cities2);
var controlResult2 = myConcat(cities1, cities2);

// Primero verifico si los arrays tienen la misma longitud
console.assert(
    controlResult1.length === controlResult2.length,
    'Error: Los arrays concatenados tienen diferentes longitudes'
);

// Comparo los elementos uno por uno
var arraysAreEqual = true; // Variable para verificar si los arrays son iguales
for (var i = 0; i < controlResult1.length; i++) {
    if (controlResult1[i] !== controlResult2[i]) {
        console.assert(
            false,
            "Error en la posición " + i + ": " + controlResult1[i] + " !== " + controlResult2[i]
        );
        arraysAreEqual = false;
    }
}

// Si todos los elementos coinciden, imprimo un mensaje de éxito
if (arraysAreEqual) {
    console.log("Los arrays concatenados son iguales.");
}

// Imprimo los resultados en la consola para verificar el funcionamiento
console.log("Array original:", cities1);
console.log("Array a concatenar:", cities2);
console.log("Resultado con concat():", controlResult1);
console.log("Resultado con myConcat():", controlResult2);
