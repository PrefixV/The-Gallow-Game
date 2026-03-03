import { getWord, setWord } from "./modules/getWord.js";
import { getThemeOfGame } from "./modules/setThemeOfGame.js";
import { toggleStartMenu } from "./modules/toggleStartMenu.js";
import { genGameZone } from "./modules/generateGameZone.js";
import { toggleGameZone } from "./modules/toggleGameZone.js";
import { generateKeyboard } from "./modules/generateKeyboard.js";
import { checkLetter } from "./modules/checkLetter.js";
import { renderEvent } from "./modules/renderEvent.js";
import {checkWord} from "./modules/checkWord.js";
import {renderLetters} from "./modules/renderLetters.js";

document.querySelector(".input__word__button")
    .addEventListener("click", () => {
        setWord();
        toggleStartMenu();
        genGameZone(getWord());
        toggleGameZone();
        generateKeyboard();
    })

document.addEventListener("DOMContentLoaded", () => {
    getThemeOfGame();
})

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("game__key")){
        checkLetter(e.target.textContent, getWord(), e.target);
    }
    if(e.target.classList.contains("check__word__button")){
        checkWord(getWord());
    }
})

