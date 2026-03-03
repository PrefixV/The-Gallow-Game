export function genGameZone(word) {
    const arrFromWord = word.split("");
    const gameZone = document.querySelector(".game__word");
    gameZone.innerHTML = "";

    arrFromWord.forEach((word,index) => {
        const gameCharContainer = document.createElement("div");
        gameCharContainer.classList.add("game__char");
        gameCharContainer.dataset.index = index;
        if(word.includes("-")) {
            gameCharContainer.textContent = "-";
        }

        gameZone.append(gameCharContainer);
    })
}