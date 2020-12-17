// first we will create two functions that will make the ball move left and right.

var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;

function moveLeft() {
    var left =
        parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) { //This limits the ball from leaving the box it's inside of
        character.style.left = left - 2 + "px";

    }
}

function moveRight() {
    var left =
        parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (both == 0) {
        both++

        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1); //inside the if statements, we create intervals that will run the correct function.

        }
    }

});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
});

//now we're creating a block and a whole. we will add new elements for each.
// we will also add classes so we can style them using CSS. 
//created a interval function so that it keeps creating holes & blocks over and over again.

setInterval(function () {
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("block"+(counter-1));
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class", "block")
    hole.setAttribute("class", "hole");
    block.setAttribute("id", "block");
    hole.setAttribute("id", "hole");
    var random = Math.floor(Math.random() * 360); // set to 360 to leave 20px's open to act as a whole. initial size is 380, this will randomize where the hole is placed.
    hole.style.left = random + "px";
    game.appendChild(block);
    game.appendChild(hole);
    counter++ // we created a counter to keep track of how many times the interval is run so we know how many blocks have been created
}, 1);
