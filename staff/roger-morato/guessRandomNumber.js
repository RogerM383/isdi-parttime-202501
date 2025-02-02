// Cargo readline para poder leer lo que el usuario escribe en el terminal.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Genero el número, entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
//contador de intentos
let attempts = 0;

console.log(randomNumber);
console.log("He pensado un número entre 1 y 100. ¡Intenta adivinarlo!");

askForNumber()
function askForNumber() {
    rl.question("Introduce un número: ", (input) => {
      const userGuess = Number(input);
      attempts++; 
  
      if (isNaN(userGuess)) {
        console.log("Eso no es un número. Inténtalo de nuevo.");
        askForNumber(); // Vuelvo a preguntar
        return;
      }

      if (userGuess < 1 || userGuess > 100) {
        console.log("El número debe estar entre 1 y 100.");
        askForNumber(); // Vuelvo a preguntar
        return;
      }

      if (userGuess === randomNumber) {
        console.log(`¡Felicidades! Has acertado en ${attempts} intentos.`);
        rl.close(); 
        return;  
      }

      // Si no ha acertado, doy pistas
      if (Math.abs(userGuess - randomNumber) <= 5) {
        console.log("¡Caliente! 🔥 🔥 🔥 ");
      } else {
        console.log("Frío. ❄️ ❄️ ❄️ ");
      }

      if (userGuess < randomNumber) {
        console.log("El número es mayor.");
      } else {
        console.log("El número es menor.");
      }

      askForNumber();  // Vuelvo a preguntar solo si no ha acertado
    });
}