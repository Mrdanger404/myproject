

const formData = [];

let serial = 1;

let submit = document.getElementById("submit");

submit.addEventListener('click', function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let className = document.getElementById("class").value;
    let gpa = document.getElementById("gpa").value;

    // Get the appropriate table body for the selected class
    const tableBody = document.querySelector(`.class${className} #c-info`);

    // Create a new table row and cells
    const serialCell = createCell(serial);
    const newRow = document.createElement("tr");
    const nameCell = createCell(name);
    const emailCell = createCell(email);
    const classCell = createCell(className);
    const gpaCell = createCell(gpa);
    

    serial++

    // Append the cells to the row
    newRow.appendChild(serialCell)
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(classCell);
    newRow.appendChild(gpaCell);
    

    // Append the row to the appropriate table body
    tableBody.appendChild(newRow);

    const studentObj = {
        serial,
        name,
        email,
        className,
        gpa
    }

    formData.push(studentObj);
});

// The createCell function remains unchanged
const createCell = (text) => {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
};

console.log(formData)
