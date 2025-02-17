var words = ["frodo", "gandalf", "aragorn", "legolas", "gollum", "saruman", "sauron", "boromir", "samwise", "elrond", "galadriel", "eowyn", "faramir"];
var secretWord = getRandomWord();
var hiddenWord = [];
var lifes = 5; 
var guessedLetters = []; 

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

for (var i = 0; i < secretWord.length; i++) {
    hiddenWord.push("_");
}

alert("The secret word has been chosen! It's a character from LOTR. Try to guess it.");

while (hiddenWord.includes("_") && lifes > 0) {
    alert("Word: " + hiddenWord.join(" ") + "\nLives left: " + lifes + "\nGuessed letters: " + guessedLetters.join(", "));

    var guessedLetter = prompt("Enter a letter:");

    function validateLetter(letter) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";

        if (!letter || letter.length !== 1) {
            alert("❌ You must enter a single letter!");
            return null;
        }

        letter = letter.toLowerCase();

        for (var i = 0; i < alphabet.length; i++) {
            if (letter === alphabet[i]) {
                return letter;
            }
        }

        alert("❌ Invalid character! Enter a letter.");
        return null;
    }

    function isLetterRepeated(letter) {
        for (var i = 0; i < guessedLetters.length; i++) {
            if (guessedLetters[i] === letter) {
                return true;
            }
        }
        return false; 
    }

    function checkLetterInWord(letter) {
        var found = false;

        for (var i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                hiddenWord[i] = letter;
                found = true;
            }
        }

        if (found) {
            alert("✅ Good guess! The word now looks like this:\n" + hiddenWord.join(" "));
        } else {
            lifes--; 
            alert("❌ Wrong guess! That letter is not in the word.\nLives left: " + lifes);
        }
    }

    var validLetter = validateLetter(guessedLetter);

    if (validLetter !== null) {
        if (isLetterRepeated(validLetter)) {
            alert("❌ You already tried that letter! Try a different one.");
        } else {
            guessedLetters.push(validLetter); 
            checkLetterInWord(validLetter);
        }
    }
}

if (!hiddenWord.includes("_")) {
    alert("🎉 Congratulations! You guessed the word: " + secretWord);
} else {
    alert("💀 Game Over! You ran out of lives. The word was: " + secretWord);
}
