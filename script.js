var body = document.querySelector("body");
var button = document.querySelector("button");

button.addEventListener("click", changeBG);
body.style.backgroundColor="black";


function changeBG(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor="#"+randomColor;
}