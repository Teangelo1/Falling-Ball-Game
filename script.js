// first we will create two functions that will make the ball move left and right.

var character = document.getElementById("character");
var interval;

function moveLeft(){
    var left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
    
}

function moveRight(){
    var left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";

}

document.addEventListener("keydown", event => {
   if(event.key==="ArrowLeft"){
       interval = setInterval(moveLeft, 1);
   }
   if(event.key==="ArrowRight"){
       interval = setInterval(moveRight, 1); //inside the if statements, we create intervals that will run the correct function.

   }

});

