import {getWord} from "./getWord.js";
import {renderEvent} from "./renderEvent.js";

let correctLetters = [];

export function renderLetters(clickedLetter) {
    const gameIcons = document.querySelectorAll(".game__char");
    let word = getWord();
    correctLetters.length = word.length;

    word = word.toLowerCase().trim();
    let letters = word.split("");

    letters.forEach((letter, index) => {
        if(letter == clickedLetter) {
            gameIcons[index].textContent = letter;
            correctLetters[index] = letter;

            if(correctLetters.join("") === word) {
                renderEvent("win");
            }
        }

    })
}
