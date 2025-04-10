let message = "Hey! What brings you here today?";
let index = 0;
let speed = 50;

function typeOut() {
  if (index < message.length) {
    document.getElementById("welcome-text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeOut, speed);
  }
}

window.onload = typeOut;
