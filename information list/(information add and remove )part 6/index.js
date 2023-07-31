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

    
   //added an event listener for each cell in the row
   for (var i = 0; i < row.children.length; i++) {
       var cell = row.children[i];
       cell.addEventListener("click", function() {
           //ask the user if they want to delete or rename the row
           var choice = prompt("Do you want to delete or rename this row? Enter D for delete or R for rename.");
           if (choice === "D") {
               //remove the row from the table
               info.removeChild(row);
           } else if (choice === "R") {
               //ask the user for the new name
               var newName = prompt("Enter the new name for this student.");
               if (newName) {
                   //update the student name cell with the new name
                   stNameCell.textContent = newName;
               }
           }
       });
   }

}


function clearInputs() {
    document.getElementById("st-name").value = "";
    document.getElementById("st-roll").value = "";
    document.getElementById("gu-name").value = "";
    document.getElementById("gu-phone").value = "";
}
