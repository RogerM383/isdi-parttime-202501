var hiddenWordEl;
var livesEl;
var usedLettersEl;
var input;
var button;
var messageEl;

function createGameUI() {
    var container = document.createElement("div");
    container.classList.add("game-container");

    var title = document.createElement("h1");
    title.textContent = "Lord of the Rings Hangman";

    var subtitle = document.createElement("h2");
    subtitle.textContent = "Guess the name of the character";

    hiddenWordEl = document.createElement("p");
    hiddenWordEl.classList.add("hidden-word");
    hiddenWordEl.textContent = "_ _ _ _ _";

    livesEl = document.createElement("p");
    livesEl.classList.add("lives");
    livesEl.innerHTML = 'Lives left: <span id="lives-count">5</span>';

    usedLettersEl = document.createElement("p");
    usedLettersEl.classList.add("used-letters");
    usedLettersEl.innerHTML = 'Used letters: <span id="used-letters-list">None</span>';

    input = document.createElement("input");
    input.type = "text";
    input.id = "letter-input";
    input.maxLength = 1;
    input.placeholder = "Enter a letter";

    button = document.createElement("button");
    button.id = "guess-button";
    button.textContent = "Guess";

    messageEl = document.createElement("p");
    messageEl.classList.add("message");

    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(hiddenWordEl);
    container.appendChild(livesEl);
    container.appendChild(usedLettersEl);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(messageEl);

    document.body.appendChild(container);
}


var words = ["frodo", "gandalf", "aragorn", "legolas", "gollum", "saruman", "sauron", "boromir", "samwise", "elrond", "galadriel", "eowyn", "faramir"];
var secretWord = getRandomWord();
var hiddenWord = Array(secretWord.length).fill("_");
var lifes = 5;
var guessedLetters = [];


createGameUI();

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updateHiddenWord() {
    hiddenWordEl.textContent = hiddenWord.join(" ");
}

function isLetterRepeated(letter) {
    return guessedLetters.includes(letter);
}

function checkLetterInWord(letter) {
    if (secretWord.includes(letter)) {
        for (var i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                hiddenWord[i] = letter;
            }
        }
        return true;
    }
    return false;
}

function updateUsedLetters() {
    usedLettersEl.textContent = guessedLetters.length ? guessedLetters.join(", ") : "None";
}

function handleGuess() {
    var guessedLetter = input.value.toLowerCase();

    if (!guessedLetter || guessedLetter.length !== 1 || !/[a-z]/.test(guessedLetter)) {
        messageEl.textContent = "❌ Please enter a valid single letter!";
        return;
    }

    if (isLetterRepeated(guessedLetter)) {
        messageEl.textContent = "⚠️ You already tried that letter!";
        return;
    }

    guessedLetters.push(guessedLetter);
    updateUsedLetters();

    if (checkLetterInWord(guessedLetter)) {
        updateHiddenWord();
        messageEl.textContent = "✅ Good guess!";
    } else {
        lifes--;
        document.querySelector("#lives-count").textContent = lifes;
        messageEl.textContent = "❌ Wrong guess! Lives left: " + lifes;
    }

    input.value = ""; 

    if (!hiddenWord.includes("_")) {
        messageEl.textContent = "🎉 You won! The word was: " + secretWord;
        button.disabled = true;
        input.disabled = true;
    } else if (lifes === 0) {
        messageEl.textContent = "💀 Game Over! The word was: " + secretWord;
        button.disabled = true;
        input.disabled = true;
    }
}

button.addEventListener("click", handleGuess);
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") handleGuess();
});

updateHiddenWord();
updateUsedLetters();