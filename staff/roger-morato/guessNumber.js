var isGameOn = confirm('¿Quieres jugar a un juego?');

if (isGameOn === true){
    guessNumber();
}else{
    alert('Tu te lo pierdes');
}

function guessNumber(){
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;
    var userGuess = 0;

    while (userGuess !== randomNumber) {
        userGuess = prompt("Introduce un número entre 1 y 100:");
        userGuess = Number(userGuess);
        attempts++;

        if (isNaN(userGuess)) {
            alert("Eso no es un número. Inténtalo de nuevo.");
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert("El número debe estar entre 1 y 100.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`¡Felicidades! Has acertado en ${attempts} intentos.`);

            // Mensajes personalizados
            if (attempts === 1) {
                alert("🎰 Increíble, has acertado a la primera. ¡Deja el bootcamp y aplica este talento a la lotería!");
            } else if (attempts <= 5) {
                alert("🔮 ¡Buena intuición! Se nota que eres de los que confían en su instinto.");
            } else if (attempts <= 10) {
                alert("😉 Lo has hecho bien, aunque podrías mejorar un poco.");
            } else if (attempts <= 15) {
                alert("😅 Bueno, lo importante es que lo lograste. ¡Sigue intentándolo!");
            } else if (attempts <= 20) {
                alert("😎 Te ha costado, pero al final lo lograste. No te rindes, eso es bueno.");
            } else {
                alert("👏😂 Esto se te da muy mal, pero aplaudo tu perseverancia.");
            }
            break; 
        }
        // Si no ha acertado, damos pistas
        if (Math.abs(userGuess - randomNumber) <= 5) {
            alert("🔥🔥🔥 ¡Caliente! 🔥🔥🔥");
        } else {
            alert("❄️❄️❄️ Frío ❄️❄️❄️");
        }

        if (userGuess < randomNumber) {
            alert("El número es mayor.");
        } else {
            alert("El número es menor.");
        }
    }
}