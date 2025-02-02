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

        // Mensajes personalizados según el número de intentos
        if (attempts === 1) {
            console.log("🎰 Increíble, has acertado a la primera. ¡Deja el bootcamp y aplica este talento a la lotería!");
        } else if (attempts <= 5) {
            console.log("🔮 ¡Buena intuición! Se nota que eres de los que confían en su instinto.");
        } else if (attempts <= 10) {
            console.log("😉 Lo has hecho bien, aunque podrías mejorar un poco.");
        } else if (attempts <= 15) {
            console.log("😅 Bueno, lo importante es que lo lograste. ¡Sigue intentándolo!");
        } else if (attempts <= 20) {
            console.log("😎 Te ha costado, pero al final lo lograste. No te rindes, eso es bueno.");
        } else {
            console.log("👏😂 Esto se te da muy mal, pero aplaudo tu perseverancia.");
        }

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