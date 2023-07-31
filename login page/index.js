

function login() {
    var user = document.getElementById("n").value
    var pass = document.getElementById("pass").value


    var nam = "tajbir23"
    var password = "2580";

    if (user == nam && pass == password) {
        window.location.href = "index2.html";
    } else {
        alert("Your password is wrong")
    }

}