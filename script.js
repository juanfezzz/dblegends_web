const messages = [
  
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
