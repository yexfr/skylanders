function playSound(url) {
    const player = new Audio(url);
    player.play();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min); 
}

Array.prototype.randomItem = function() {
   if(this.length > 0) 
      return this[randomNumber(0, this.length - 1)];
}

const main = document.querySelector("main");

class Card {
    constructor(name, level, element="none", hand=null, owner=null) {
        this.name = name;
        this.level = level;
        this.element = element.toLowerCase();
        this.owner = owner;
        this.hand = hand;
    }

    moveToBoard() {
        const emptyTiles = Array.of(...document.querySelectorAll(".tile")).filter(v => v.hasAttribute("empty"));
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-portrait");
        cardImage.classList.add("floating");
        cardImage = `./assets/img/${this.name.toLowerCase()}.png`;
        const tile = emptyTiles.randomItem();
        tile.appendChild(cardImage);
        if(this.element !== "none")
            tile.setAttribute("element", this.element);
        main.addEventListener("keydown", e => {
            if(e.key.startsWith("Arrow"))
                this.moveOnBoard(e.key.slice(5).toLowerCase());
        });
    }

    moveOnBoard(direction) {

    }
}

