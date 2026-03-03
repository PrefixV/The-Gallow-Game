export function genGameZone(word) {
    const arrFromWord = word.split("");
    const gameZone = document.querySelector(".game__word");
    arrFromWord.forEach((word,index) => {
        const gameCharContainer = document.createElement("div");
        gameCharContainer.classList.add("game__char");
        gameCharContainer.dataset.index = index;

        gameZone.append(gameCharContainer);
    })
}