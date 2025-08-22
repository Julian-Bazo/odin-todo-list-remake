import displayTasks from "./displayTasks";
import List from "./list";
import Task from "./task";
import clearContent from "./clearContent";
import { format } from "date-fns";

const sidebar = document.querySelector(".sidebar");
const list = document.querySelector(".list");

const createListButton = document.createElement("button");
createListButton.textContent = "Create List";
sidebar.appendChild(createListButton);

const createTaskButton = document.createElement("button");
createTaskButton.textContent = "Create Task";
sidebar.appendChild(createTaskButton);
createTaskButton.style.display = "none";

createTaskButton.addEventListener("click", () => {
    taskModal.style.display = "block";
})

createListButton.addEventListener("click", () => {
    listModal.style.display = "block";
})

const taskModal = document.createElement("div");
taskModal.classList.add("task-modal");
taskModal.classList.add("modal");
sidebar.appendChild(taskModal);

const listModal = document.createElement("div");
listModal.classList.add("list-modal");
listModal.classList.add("modal");
sidebar.appendChild(listModal);

const listModalContent = document.createElement("div");
listModal.appendChild(listModalContent);
listModalContent.textContent = "Placeholder modal content";

const closeListModalButton = document.createElement("button");
closeListModalButton.textContent = "X";
listModalContent.appendChild(closeListModalButton);

const inputListForm = document.createElement("form");
listModalContent.appendChild(inputListForm);

const inputTitle = document.createElement("input");
inputTitle.type = "text";
inputTitle.id = "title";
inputTitle.placeholder = "List title";
inputListForm.appendChild(inputTitle);

const submitListButton = document.createElement("button");
submitListButton.type = "button";
submitListButton.textContent = "Submit";
inputListForm.appendChild(submitListButton);

const resetListButton = document.createElement("button");
resetListButton.type = "reset";
resetListButton.style.display = "none";
inputListForm.appendChild(resetListButton);

let titleData;
let projectArray = [];

function clearProjectArray() {
    projectArray = [];
}

let currentList = projectArray[0];
function setCurrentList(i) {
    currentList = i;
}; 


submitListButton.addEventListener("click", () => {
    titleData = inputTitle.value;

    const wholeItem = document.createElement('div');
    wholeItem.classList.add("sidebar-item");
    sidebar.appendChild(wholeItem);

    const newProj = document.createElement("div");
    newProj.textContent = titleData;
    newProj.classList.add("item-title");
    wholeItem.appendChild(newProj);
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-button");
    wholeItem.appendChild(deleteButton);
    // newProj.addEventListener("click", )
    const newList = new List(`${titleData}`);
    projectArray.push(newList);
    console.log(newList);

    createTaskButton.style.display = "block";
    console.log(`Title: ${titleData}`);

    currentList = newList;

    deleteButton.addEventListener("click", () => {
        clearContent();
        let value = projectArray.map((list) => {return list.name}).indexOf(`${newProj.textContent}`);
        console.log(projectArray);
        projectArray[value].data = null;
        projectArray.splice(value, 1);
        console.log(projectArray);
        // currentList = projectArray[0];
        createTaskButton.style.display = "none";

        while (wholeItem.firstChild){
            wholeItem.removeChild(wholeItem.lastChild);
        }
    })

    newProj.addEventListener("click", () => {
        let value = projectArray.map((list) => {return list.name}).indexOf(`${newProj.textContent}`);
        console.log("I was clicked!");
        console.log(`Value: ${value}`);
        currentList = projectArray[value];
        console.log(`Current: ${typeof currentList}`);
        displayTasks(newList);
        createTaskButton.style.display = "block";
    })
    // Has something to do with this ^^
    
    resetListButton.click();
    closeListModalButton.click();
})

const taskModalContent = document.createElement("div");
taskModal.appendChild(taskModalContent);
taskModalContent.textContent = "Placeholder modal content";

const closeTaskModalButton = document.createElement("button");
closeTaskModalButton.textContent = "X";
taskModalContent.appendChild(closeTaskModalButton);

const inputTaskForm = document.createElement("form");
taskModalContent.appendChild(inputTaskForm);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.placeholder = "Task name";
inputTaskForm.appendChild(nameInput);

const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
inputTaskForm.appendChild(dateInput);

const descInput = document.createElement("textarea");
descInput.id = "desc";
descInput.rows = "2";
descInput.cols = "33";
descInput.placeholder = "Task description...";
inputTaskForm.appendChild(descInput);

const urgencyInput = document.createElement("input");
urgencyInput.type = "checkbox";
urgencyInput.id = "urgency";
inputTaskForm.appendChild(urgencyInput);

const submitTaskButton = document.createElement("button");
submitTaskButton.type = "button";
submitTaskButton.textContent = "Add Task";
inputTaskForm.appendChild(submitTaskButton)

const resetTaskButton = document.createElement("button");
resetTaskButton.type = "reset";
resetTaskButton.textContent = "Clear Task"
inputTaskForm.appendChild(resetTaskButton);

let nameData;
let dateData;
let descData;
let urgencyData;

submitTaskButton.addEventListener("click", () => {
    nameData = nameInput.value;

    if (dateInput.value !== "" && dateInput.value !== "Anytime") {
        dateData = format(new Date(dateInput.value), "MM/dd");
    }
    else {
        dateData = "Anytime";
    }
    descData = descInput.value;
    urgencyData = urgencyInput.checked;

    if (currentList.data === null) {
        setCurrentList(projectArray[0]);
    }

    console.log(currentList);
    currentList.addTask(`${nameData}`, `${dateData}`, `${descData}`, `${urgencyData}`);

    displayTasks(currentList);
    
    console.log(`${currentList.name}`);

    closeTaskModalButton.click();
    resetTaskButton.click();
})


closeTaskModalButton.addEventListener("click", () => {
    taskModal.style.display = "none";
})

closeListModalButton.addEventListener("click", () => {
    listModal.style.display = "none";
})

export {createTaskButton, clearProjectArray, inputTitle, nameInput, dateInput, descInput, urgencyInput, titleData, nameData, dateData, descData, urgencyData, list, sidebar, projectArray, currentList, setCurrentList};
