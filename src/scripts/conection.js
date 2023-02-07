function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    var conssct= document.querySelector("BNT_cheh");


    conssct.addEventListener('click', () => {
        if (username == "admin" && password == "admin") {
            alert("Bienvenue");
        }
        window.location.href = "http://medusa48h.alwaysdata.net/grotte.php";
        else {
           this.reload();
        }
    });
  }