const themes = ["Природа", "Технологии", "Еда", "Человек", "Животные", "Путешествия", "Кино", "Профессия", "Спорт", "Искусство"];
export function getThemeOfGame() {
    const themeContainer = document.querySelector(".theme__container");
    const randomNum = Math.floor(Math.random() * themes.length);
    themeContainer.textContent = `Тема: ${themes[randomNum]}`;
}