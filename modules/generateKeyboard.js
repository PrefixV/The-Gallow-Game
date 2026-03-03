const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
const keyboard = document.querySelector('.game__keyboard');

export function generateKeyboard() {
    keyboard.innerHTML = '';

    alphabet.forEach((letter) => {
        const key = document.createElement("button");
        key.classList.add('game__key');
        key.textContent = letter;

        keyboard.append(key);
    })
}