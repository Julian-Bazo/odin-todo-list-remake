
export default function createModal() {

const sidebar = document.querySelector(".sidebar");

const createButton = document.createElement("button");
createButton.textContent = "Create List";
sidebar.appendChild(createButton);

createButton.addEventListener("click", () => {
    modal.style.display = "block";
})

const modal = document.createElement("div");
modal.classList.add("modal");
sidebar.appendChild(modal);

const modalContent = document.createElement("div");
modal.appendChild(modalContent);
modalContent.textContent = "Placeholder modal content";

const closeButton = document.createElement("button");
closeButton.textContent = "X";
modalContent.appendChild(closeButton);

const inputForm = document.createElement("form");
modalContent.appendChild(inputForm);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.placeholder = "Task name";
inputForm.appendChild(nameInput);

const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
inputForm.appendChild(dateInput);

const descInput = document.createElement("textarea");
descInput.id = "desc";
descInput.rows = "2";
descInput.cols = "33";
descInput.placeholder = "Task description...";
inputForm.appendChild(descInput);

const urgencyInput = document.createElement("input");
urgencyInput.type = "checkbox";
urgencyInput.id = "urgency";
inputForm.appendChild(urgencyInput);

const submitButton = document.createElement("button");
submitButton.type = "button";
submitButton.textContent = "Add Task";
inputForm.appendChild(submitButton)

const resetButton = document.createElement("button");
resetButton.type = "reset";
resetButton.textContent = "Clear Task"
inputForm.appendChild(resetButton);

submitButton.addEventListener("click", () => {
    let nameData = nameInput.value;
    let dateData = dateInput.value;
    dateData = dateData.slice(5);
    let descData = descInput.value;
    let urgencyData = urgencyInput.checked;

    console.log(`Name: ${nameData}`);
    console.log(`Date: ${dateData}`);
    console.log(`Desc: ${descData}`);
    console.log(`Urgency: ${urgencyData}`);
})


closeButton.addEventListener("click", () => {
    modal.style.display = "none";
})

createButton.click();
}