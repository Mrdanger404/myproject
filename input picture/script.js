var form = document.getElementById("student-info");
var list = document.getElementById("students");

form.addEventListener("submit", addData);

function addData(event) {
    event.preventDefault();

    var formData = new FormData(form);

    var stName = formData.get("name");
    var stClass = formData.get("class");
    var stRoll = formData.get("roll");
    var guName = formData.get("guardian");
    var guNumber = formData.get("gunumber");
    var stPhoto = formData.get("photo");

    var info  = document.getElementById("students");
    var row = document.createElement("tr");

    info.appendChild(row);

    var classCell = document.createElement("td");
    var classText = document.createTextNode(stClass);
    classCell.appendChild(classText);
    row.appendChild(classCell);

    var rollCell = document.createElement("td");
    var rollText = document.createTextNode(stRoll);
    rollCell.appendChild(rollText);
    row.appendChild(rollCell);

    var stNameCell = document.createElement("td");
    var stNameText = document.createTextNode(stName);
    stNameCell.appendChild(stNameText);
    row.appendChild(stNameCell);

    var guNameCell = document.createElement("td");
    var guNameText = document.createTextNode(guName);
    guNameCell.appendChild(guNameText);
    row.appendChild(guNameCell);

    var GuNumber = document.createElement("td");
    var guNumberText = document.createTextNode(guNumber);
    GuNumber.appendChild(guNumberText);
    row.appendChild(GuNumber);

    var stPictureCell = document.createElement("td")
    var stPicture = document.createElement("img");
    stPicture.src = URL.createObjectURL(stPhoto);
    stPictureCell.appendChild(stPicture);
    row.appendChild(stPictureCell);

}
