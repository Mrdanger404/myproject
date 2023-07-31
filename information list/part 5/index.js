var submit = document.getElementById("submit");

var serial = 1;

submit.addEventListener("click", functionSubmit);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function functionSubmit() {
    var stName = document.getElementById("st-name").value;
    var stRoll = document.getElementById("st-roll").value;
    var guName = document.getElementById("gu-name").value;
    var guPhone = document.getElementById("gu-phone").value;

    var info = document.getElementById("info");
    var row = document.createElement("tr");

    //for serial number
    var serialCell = document.createElement("td");
    var serialText = document.createTextNode(serial);
    serialCell.appendChild(serialText);
    row.appendChild(serialText);
    
    serial++;

    info.appendChild(row);

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

    
   //added a new cell for delete button
   var deleteCell = document.createElement("td");
   var deleteButton = document.createElement("button");
   deleteButton.textContent = "Delete";
   deleteButton.addEventListener("click", function() {
       //remove the row from the table when the button is clicked
       info.removeChild(row);
   });
   deleteCell.appendChild(deleteButton);
   row.appendChild(deleteCell);

}


function clearInputs() {
    document.getElementById("st-name").value = "";
    document.getElementById("st-roll").value = "";
    document.getElementById("gu-name").value = "";
    document.getElementById("gu-phone").value = "";
}
