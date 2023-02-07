
const logins = {
    "bob": "password1",
};
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = inputs[0].value;
    const password = inputs[1].value;
    if (logins[username] === password) {
        // Accédez à la page suivante ici
        window.location.href = "next-page.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
    }
});
