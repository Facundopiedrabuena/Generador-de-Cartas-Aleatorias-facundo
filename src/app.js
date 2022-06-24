/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".number").innerHTML = elnumero;
  document.querySelector(".post-suit").innerHTML = elsimbolo;
  document.querySelector(".buttom-suit").innerHTML = elsimbolo;
  setInterval(generadordetiempo, 1000);
};
var timer = 5;
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let elnumero = numeros[Math.floor(Math.random() * numeros.length)];

let simbolo = ["♥", "♦", "♣", "♠"];
let elsimbolo = simbolo[Math.floor(Math.random() * simbolo.length)];

if (elsimbolo == "♥" || elsimbolo == "♦") {
  document.getElementById("simboloArriba").style.color = "red";
}

if (elsimbolo == "♥" || elsimbolo == "♦") {
  document.getElementById("simboloAbajo").style.color = "red";
}
if (elsimbolo == "♣" || elsimbolo == "♠") {
  document.getElementById("simboloArriba").style.color = "black";
}

if (elsimbolo == "♣" || elsimbolo == "♠") {
  document.getElementById("simboloAbajo").style.color = "black";
}

function generadordetiempo() {
  let timerspan = document.getElementById("timer");
  if (timer == 1) {
    timer = 5;
  } else {
    timer -= 1;
  }
  timerspan.innerText = timer;
}
setInterval(function() {
  location.href = location.href;
}, 1000 * 5);
