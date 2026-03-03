import {getWord} from "./getWord.js";
import {renderEvent} from "./renderEvent.js";

let correctLetters = [];
correctLetters.length = getWord().length;

export function renderLetters(clickedLetter) {
    const gameIcons = document.querySelectorAll(".game__char");
    let word = getWord();
    word = word.toLowerCase().trim();
    let letters = word.split("");

    letters.forEach((letter, index) => {
        if(letter == clickedLetter) {
            gameIcons[index].textContent = letter;
            correctLetters[index] = letter;
            console.log(correctLetters);

            if(correctLetters.join("") === word) {
                renderEvent("win");
            }
        }

        if(letter == "-") {
            correctLetters[index] = "-"
        }

    })
}
