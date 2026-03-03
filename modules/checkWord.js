import {renderEvent} from "./renderEvent.js";

const userWord = document.querySelector(".input__correct__word");

export function checkWord(word) {
    if(!userWord) return;
   const userValue = userWord.value.toLowerCase().trim();
   const correctWord = word.toLowerCase().trim();

   if(userValue === correctWord) {
       renderEvent("win");
   } else {
       renderEvent("endGame");
   }
}