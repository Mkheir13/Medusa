function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username === "hola" && password === "poto") {
      window.location = "http://medusa48h.alwaysdata.net/grotte.php";
      return false;
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
      return false;
    }
  }