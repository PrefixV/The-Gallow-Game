const gameZoneContainer = document.querySelector('.game__word__container');

export function toggleGameZone() {
    gameZoneContainer.classList.toggle('game__word__container__hidden');
}