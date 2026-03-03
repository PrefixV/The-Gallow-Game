export function setWord() {
    const wordInput = document.querySelector(".input__word__container__input");
        let word = wordInput.value;
        if(word.includes(" ")) {
            word = word.replaceAll(" ", "-");
        }
    localStorage.setItem("word", JSON.stringify(word) || "");
}

export function getWord() {
    return  JSON.parse(localStorage.getItem("word"));
}
