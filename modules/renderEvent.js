import {getWord} from "./getWord.js";
import {toggleGameZone} from "./toggleGameZone.js";
import {toggleStartMenu} from "./toggleStartMenu.js";
import {getThemeOfGame} from "./setThemeOfGame.js";
import {correctLetters} from "./renderLetters.js";

const eventContainer = document.querySelector('.event__container');
const eventMessage = document.querySelector('.event__container__message');

function showEvent(message, className, timeout = 1500, reload = false) {
    eventMessage.textContent = message;
    eventContainer.classList.add(className);
    setTimeout(() => {
        eventContainer.classList.remove(className);
        eventMessage.textContent = '';

        if(reload) {
            toggleGameZone();
            toggleStartMenu();
            getThemeOfGame();
            correctLetters.splice(0, correctLetters.length);
        }
    }, timeout)
}

export function renderEvent(event, counter) {
    switch(event) {
        case "error":
            showEvent("Ошибка!", "error__event");
            break;
                case "wrongLetter":
                    showEvent(`Нет такой буквы! Попытка: ${counter}`, "wrongLetter__event");
            break;
        case "endGame":
           showEvent(`Вы проиграли! Слово было: ${getWord()}`, "endGame__event", 3000, true)
            break;
        case "win":
            showEvent(`Вы выиграли!`, `win__event`, 3000, true);
            break;
    }
}