// var APIKey = "a21690291032747ea02cca028da03d72";


const input= document.querySelector("input");
h2 = document.querySelector("h2");

h2.innerHTML = localStorage.getItem ("city")

input.addEventListener("keyup", display);

function display(){
localStorage.setItem('city', input.value)
h2.innerHTML = localStorage.getItem ("city")
}