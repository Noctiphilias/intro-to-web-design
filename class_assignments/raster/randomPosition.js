let decontextImg = document.querySelector('.me');

// let postion = Math.random().map(0,1, );
//checks to make sure the element #logo is assigned properly
if(decontextImg !== null){
    console.log("exists");
}else{
    console.log("This doesn't exist.");
}

function positionRandomizer() {
const PosX = window.innerWidth - decontextImg.clientWidth;
const PosY = window.innerWidth - decontextImg.clientHeight;
let randomX = Math.random() * PosX;
let randomY = Math.random() * PosY;

decontextImg.style.left = randomX + "px"; //goes into style for the left attribute
decontextImg.style.top = randomY + "px"; //goes into style for the top attribute

}
positionRandomizer();
