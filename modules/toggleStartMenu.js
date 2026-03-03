const startMenu = document.querySelector(".input__word__container");
const startInput = document.querySelector(".input__word__container__input");

export function toggleStartMenu() {
    startMenu.classList.toggle("input__word__container__hidden");
    startInput.value = "";
}