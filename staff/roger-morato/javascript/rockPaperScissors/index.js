var choices = ['rock', 'paper', 'scissors'];

var body = document.body;
var playerChoice = '';
var cpuChoice = '';

var gameContainer = document.createElement('div');
var resultDiv = document.createElement('div');

body.appendChild(gameContainer);
gameContainer.classList.add('game-container');
gameContainer.appendChild(resultDiv);

/*
    var img = document.createElement('img')

    img.src = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'

    button.appendChild(img)
*/

// Crear una función que, pasada la elección hecha por el jugador ejecuta
// una decisión hecha al azar por el CPU
// luego de estas dos decisiones, se comparan y se elige quien gana
// cuando se sabe quien ha ganado, se le avisa de ello al usuario

//que se renderize feedback de lo que ha elegido el usuario y lo que ha
//elegido al azar por parte del cpu

function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.classList.add('choice-button');
    button.textContent = _choice;

    button.addEventListener('click', function () {
        playerChoice = _choice;
        console.log("El jugador a elegido: ", playerChoice);
        checkWinner();
    })
    gameContainer.appendChild(button);

}

for (var i = 0; i < choices.length; i++) {
    generateChoiceButton(choices[i])
}

function randomPick(_choice) {
    return _choice[Math.floor(Math.random() * _choice.length)];
}

cpuChoice = randomPick(choices);
console.log(cpuChoice);

function checkWinner(){
    var resultMessage = '';
    if (playerChoice === cpuChoice){
        resultMessage = `<p>¡Empate!</p>`;
    } else if ( 
        (playerChoice === 'paper' && cpuChoice === 'rock') || 
        (playerChoice === "rock" && cpuChoice === "scissors") || 
        (playerChoice === "scissors" && cpuChoice === "paper")
    ){
        resultMessage = `<p>¡Has ganado!</p>`;
    }else{
        resultMessage = `<p>¡Has perdido!</p>`;
    }
    resultDiv.innerHTML = resultMessage;
}