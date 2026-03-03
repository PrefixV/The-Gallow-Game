import { renderEvent } from "./renderEvent.js";
import { renderLetters } from "./renderLetters.js";

let attempts = 0;
const maxAttempts = 8;

export function checkLetter(letter, word, keyElement) {
    letter = letter.toLowerCase();

    if (word.toLowerCase().includes(letter)) {
        renderEvent("correctLetter");
        renderLetters(letter);
    } else {
        attempts++;
        renderEvent("wrongLetter", attempts);

        if(attempts >= maxAttempts) {
            renderEvent("endGame");
        }
    }
    keyElement.disabled = true;
}