var isGameOn = confirm('¿Quieres jugar a adivinar un número?');

if (isGameOn) {
    playGame();
} else {
    alert('Tú te lo pierdes');
}

function playGame() {
    var results = []; 
    for (var round = 1; round <= 3; round++) {
        alert(`RONDA ${round} - ¡Buena suerte!`);

        var attempts = guessNumber(round); 

        if (attempts === null) {
            alert("Juego cancelado. ¡Hasta la próxima!");
            return;
        }

        results.push(attempts); 

        alert(`¡Has completado la RONDA ${round} en ${attempts} intentos!`);
    }

    showFinalResults(results);
}

function guessNumber(round) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;
    var userGuess = 0;

    console.log(`Número secreto para la RONDA ${round}: ${randomNumber}`);

    while (userGuess !== randomNumber) {
        userGuess = prompt(`RONDA ${round} - Introduce un número entre 1 y 100:`);
        
        if (userGuess === null) {
            return null;
        }

        userGuess = Number(userGuess);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Introduce un número válido entre 1 y 100.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`¡Felicidades! Has acertado en ${attempts} intentos.`);
            return attempts; 
        }

        if (Math.abs(userGuess - randomNumber) <= 5) {
            alert("🔥 ¡Caliente! 🔥 ");
        } else {
            alert("❄️ Frío ❄️ ");
        }
        
        if (userGuess < randomNumber) {
            alert("El número es mayor.");
        } else {
            alert("El número es menor.");
        }
        
    }
}

/**
 * This funcitons shows a custom messaged based on the attempts the user needed
 * @returns null
 * 
 */
function showFinalResults(results) {
    var totalAttempts = 0;
    for (var i = 0; i < results.length; i++) {
        totalAttempts += results[i]; 
    }
    var finalMessage = getFinalMessage(totalAttempts);

    alert(`¡Juego terminado! Aquí tienes tus resultados:

    🏆 Ronda 1: ${results[0]} intentos
    🏆 Ronda 2: ${results[1]} intentos
    🏆 Ronda 3: ${results[2]} intentos

    🔥 Intentos totales: ${totalAttempts}

    ${finalMessage}

    ¡Gracias por jugar!`);
}


function getFinalMessage(totalAttempts) {
    if (totalAttempts <= 3) {
        return "¡IMPRESIONANTE! Acertaste con una precisión sobrehumana. Considera probar la lotería.";
    } else if (totalAttempts <= 10) {
        return "¡Qué crack! Has demostrado una intuición increíble.";
    } else if (totalAttempts <= 20) {
        return "Lo has hecho bien, aunque podrías mejorar un poco. ¡Sigue entrenando!";
    } else if (totalAttempts <= 30) {
        return "Bueno, lo importante es que lo lograste. ¡La perseverancia es clave!";
    } else if (totalAttempts <= 40) {
        return "Te ha costado, pero al final lo lograste. ¡Eso es lo que cuenta!";
    } else {
        return "Esto se te da muy mal, pero al menos terminaste. ¡Nos vemos en la próxima!";
    }
}