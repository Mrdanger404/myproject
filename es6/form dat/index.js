
// JavaScript code using ES6 syntax
const formData = [];

const submitForm = document.getElementById("submit");
submitForm.addEventListener("click", myFunction);

function myFunction(params) {
    params.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const className = document.getElementById("class").value;
    const gpa = document.getElementById("gpa").value;

    const info = document.getElementById("info");
    const row = document.createElement("tr");

    info.appendChild(row);
  
    const createCell = (text) => {
        const cell = document.createElement("td");
        cell.textContent = text;
        return cell;
    };

    row.appendChild(createCell(name));
    row.appendChild(createCell(email));
    row.appendChild(createCell(className));
    row.appendChild(createCell(gpa));

    const studentObj = {
        name,
        email,
        className,
        gpa
    };

    formData.push(studentObj);

    console.log(formData)
}


