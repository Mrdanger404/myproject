
var addInput = document.getElementById("add-item");
var items = document.getElementById("items");
addInput.addEventListener("click", myFunction);

function myFunction() {
    // Get the value of the input field
    var inputItem = document.getElementById("input-text").value;


    // Create a new h2 element
    var itemList = document.createElement("h2");


    // Create a text node with the value of the input
    var item = document.createTextNode(inputItem);


    // Append the text node to the h2 element
    itemList.appendChild(item);

    
    // Append the h2 element to the div element
    items.appendChild(itemList);
}