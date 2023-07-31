var submit = document.getElementById("submit");

submit.addEventListener("click", functionSubmit);

function functionSubmit() {
    var stName = document.getElementById("st-name").value;
    var stRoll = document.getElementById("st-roll").value;
    var guName = document.getElementById("gu-name").value;
    var guPhone = document.getElementById("gu-phone").value;

    var info = document.getElementById("info");
    var row = document.createElement("tr");

    // it was info.appendChild(row);
    info.insertBefore(row, info.firstChild);

    var stNameCell = document.createElement("td");
    var stNameText = document.createTextNode(stName);
    stNameCell.appendChild(stNameText);
    row.appendChild(stNameCell);


    var stRollCell = document.createElement("td");
    var stRollText = document.createTextNode(stRoll);
    stRollCell.appendChild(stRollText);
    row.appendChild(stRollCell);

    var guNameCell = document.createElement("td");
    var guNameText = document.createTextNode(guName);
    guNameCell.appendChild(guNameText);
    row.appendChild(guNameCell);

    var guPhoneCell = document.createElement("td");
    var guPhoneText = document.createTextNode(guPhone);
    guPhoneCell.appendChild(guPhoneText);
    row.appendChild(guPhoneCell);
}


function clearInputs() {
    document.getElementById("st-name").value = "";
    document.getElementById("st-roll").value = "";
    document.getElementById("gu-name").value = "";
    document.getElementById("gu-phone").value = "";
}