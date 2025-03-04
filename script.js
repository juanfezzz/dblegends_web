const messages = [
    "eres una persona increible y me alegra tenerte en mi vida 💖",
    "algo q me gusta de ti, es tu compañia, entonces no pienses q no me gusta tenerte cerca 😊",
    "eres de esas personas q realmente valen la pena 💫",
    "gracias por ser como eres, no cambies nunca ❤️",
    "tqm papu <3 ✨"
];

let index = 0;
let activated = false;

function activatePage() {
    if (!activated) {
        document.body.classList.add("active");
        document.getElementById("photo").style.display = "block"; 
        activated = true;
    }
    changeText();
}

function changeText() {
    document.getElementById("text").textContent = messages[index];
    index = (index + 1) % messages.length;
}
