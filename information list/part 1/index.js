var add = document.getElementById("add-button");

add.addEventListener("click", myFunction);

function myFunction() {
    var name = document.getElementById("input-text").value;
    var email = document.getElementById("input-email").value;
    var number = document.getElementById("input-number").value;

    var info = document.getElementById("info");
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    var nameText = document.createTextNode("Name: " + name);
    nameCell.appendChild(nameText);
    row.appendChild(nameCell);

    var emailCell = document.createElement("td");
    var emailText = document.createTextNode("Email: " + email);
    emailCell.appendChild(emailText);
    row.appendChild(emailCell);

    var numberCell = document.createElement("td");
    var numberText = document.createTextNode("Phone Number: " + number);
    numberCell.appendChild(numberText);
    row.appendChild(numberCell);

    info.appendChild(row);
}
