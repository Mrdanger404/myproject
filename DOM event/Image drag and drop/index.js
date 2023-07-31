var post = document.getElementById("submit");

post.addEventListener("click", postFunction);

function postFunction(e) {
    e.preventDefault();

    var inputText = document.getElementById("name").value;
    var inputAge = document.getElementById("age").value;
    var getImage = document.querySelector("fieldset");

    var info = document.getElementById("info");
    var row = document.createElement("tr")

    var nameCell = document.createElement("td");
    var nameText = document.createTextNode(inputText);
    row.appendChild(nameCell);
    nameCell.appendChild(nameText);

    var ageCell = document.createElement("td");
    var ageText = document.createTextNode(inputAge);
    row.appendChild(ageCell);
    ageCell.appendChild(ageText);

    
}