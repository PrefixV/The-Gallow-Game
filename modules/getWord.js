export function setWord() {
    const wordInput = document.querySelector(".input__word__container__input");
    const word = wordInput.value;
    localStorage.setItem("word", JSON.stringify(word));
}

export function getWord() {
    return  JSON.parse(localStorage.getItem("word"));
}
