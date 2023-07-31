
const formData = [];

const submitForm = document.querySelector("#submit");

submitForm.addEventListener("click", myFunction);

function myFunction(e) {
    e.preventDefault()
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
    }

    // create a button element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener('click', function () {
        console.log(deleteBtn);
        info.removeChild(row);

        formData.splice(formData.indexOf(studentObj), 1);
        alert("This item is deleted")
    })
    row.appendChild(createCell(name));
    row.appendChild(createCell(email));
    row.appendChild(createCell(className));
    row.appendChild(createCell(gpa));
    row.appendChild(deleteBtn);


    const studentObj = {
        name,
        email,
        className,
        gpa
    }

    formData.push(studentObj);
    formData.sort((a, b) => {b.gpa - a.gpa})

    console.log(formData)
}


const filterForm = document.querySelector("#c-submit");

filterForm.addEventListener("click", filterData);

function filterData(e) {
    e.preventDefault();
    
    const selectedClass = document.getElementById("c-class").value;
    const selectedGPA = document.getElementById("c-gpa").value;

    // Clear the existing content in the filtered table
    const cInfo = document.getElementById("c-info");
    cInfo.innerHTML = '';

    // Filter the data based on the selected class and CGPA
    const filteredData = formData.filter((student) => {
        return student.className === selectedClass && student.gpa === selectedGPA;
    });

    // Populate the filtered data into the table
    filteredData.forEach((student) => {
        const row = document.createElement("tr");
        row.appendChild(createCell(student.name));
        row.appendChild(createCell(student.email));
        row.appendChild(createCell(student.className));
        row.appendChild(createCell(student.gpa));
        cInfo.appendChild(row);
    });
}

function createCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
}

