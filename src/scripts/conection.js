function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    var conssct= document.querySelector("BNT_cheh");

    //disable conssct button
    conssct.disabled = true;

    if (username == "admin" && password == "admin") {
        conssct.disabled = false;
    }


    conssct.addEventListener('click', () => {
            window.location.href = "http://medusa48h.alwaysdata.net/grotte.php";
    });
  }