const messages = [
    "Por lo único que he estado mal, era por no saber cómo decirte esto. Estas semanas que he pasado contigo han sido diferentes, especiales de una forma que en ningún momento me esperé.",
    "Sé que estos días no ha habido el contacto que yo esperaba que tuviéramos. La verdad, tuve miedo. Ya no sé cómo expresarme contigo en el poco tiempo que llevamos hablando, y eso me ha hecho dudar en cómo decirte lo que realmente siento.",
    "Me he dado cuenta de que me gusta estar contigo, hablar contigo, compartir momentos aunque sean pequeños. Siento que cada vez quiero conocerte más, entenderte mejor, ayudarte y simplemente disfrutar de tu compañía.",
    "Sé que a veces no te puedo tratar bien, que no siempre soy la mejor persona ni el mejor amigo. Sé que en algún momento pude haber arruinado las cosas o incomodarte sin querer. Pero también sé que puedo mejorar, y que si me das la oportunidad, puedo aprender a compartir mejor si tú me ayudas con eso.",
    "Posiblemente no sea la persona que buscas o la que te gusta, pero aun así, quiero intentarlo. Porque lo que siento es sincero y vale la pena decirlo. Y algo que quiero que tengas claro es que jamás me gustaría hacerte llorar o lastimarte de ninguna forma. Lo último que quiero es ser una razón para que te sientas mal.",
    "No espero una respuesta ni que esto cambie nada si no quieres. Solo quería que lo supieras. Me gustas, y si alguna vez te preguntas si disfruto estar contigo, te lo digo nuevamente, la respuesta es sí, más de lo que te lo puedo explicar."
];

let index = 0;
let activated = false;

function activatePage() {
    if (!activated) {
        document.body.classList.add("active");
        document.getElementById("photo").style.display = "block";
        activated = true;
    }
    changeText(); // Solo cambia el texto después de activarse
}

function changeText() {
    const textElement = document.getElementById("text");
    if (textElement) {
        textElement.textContent = messages[index];
        index = (index + 1) % messages.length;
    }
}

// Asegura que el botón tenga el evento bien asignado
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mainButton");
    if (button) {
        button.addEventListener("click", activatePage);
    }
});