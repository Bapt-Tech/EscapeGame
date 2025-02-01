function verifierReponse(enigme) {
    let reponse, bonneReponse, message, nextButton;

    if (enigme === 1) {
        reponse = document.getElementById("reponse1").value.toLowerCase();
        bonneReponse = "cassius le perfide";
        message = document.getElementById("message1");
        nextButton = document.getElementById("next1");
    } else if (enigme === 2) {
        reponse = document.getElementById("reponse2").value;
        bonneReponse = "3247";
        message = document.getElementById("message2");
        nextButton = document.getElementById("next2");
    } else if (enigme === 3) {
        reponse = document.getElementById("reponse3").value.toLowerCase();
        bonneReponse = "vespasien";
        message = document.getElementById("message3");
        nextButton = document.getElementById("victory");
    }

    if (reponse === bonneReponse) {
        message.innerText = "Bonne réponse !";
        message.style.color = "green";
        nextButton.classList.remove("hidden");
    } else {
        message.innerText = "Mauvaise réponse, réessayez.";
        message.style.color = "red";
    }
}
