import {getWord} from "./getWord.js";
import {renderEvent} from "./renderEvent.js";

export let correctLetters = [];

export function renderLetters(clickedLetter) {
    const gameIcons = document.querySelectorAll(".game__char");
    let word = getWord();
    word = word.toLowerCase();
    console.log(correctLetters);

    if(correctLetters.length === 0) {
        correctLetters = Array(word.length).fill("");
    }

    word.split("").forEach((letter, index) => {
        if(letter === clickedLetter) {
            gameIcons[index].textContent = letter;
            correctLetters[index] = letter;
        }

        if(letter === "-") {
            correctLetters[index] = "-";
        }
    })

    if(correctLetters.join("") === word) {
        renderEvent("win");
    }
}
