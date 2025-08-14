import List from "./list";
import displayTasks from "./displayTasks";
import { sidebar } from "./modal";
import { projectArray, currentList } from "./modal";
import clearContent from "./clearContent";


const wholeItem = document.createElement("div");
wholeItem.classList.add("sidebar-item");
sidebar.appendChild(wholeItem);

const defaultTitleSidebar = document.createElement("div");
defaultTitleSidebar.textContent = `Default`;
wholeItem.appendChild(defaultTitleSidebar);

const deleteButton = document.createElement("div");
deleteButton.classList.add("delete-button");
wholeItem.appendChild(deleteButton);


export default function createDefaultList() {
    const domTest = new List("Default");
    domTest.addTask("Go grab eggs", "04/25", "", "false");
    domTest.addTask("Fishing day", "06/24", "Hello", "true");

    projectArray.push(domTest);

    defaultTitleSidebar.addEventListener("click", () => {
        let value = projectArray.map((list) => {return list.name}).indexOf(`${defaultTitleSidebar.textContent}`);
        // currentList = projectArray[value];
        console.log(`Default was clicked!`);
        console.log(`Value: ${value}`);
        displayTasks(domTest);
    });
    
    displayTasks(domTest);
}

deleteButton.addEventListener("click", () => {
    clearContent();
    console.log(projectArray);
    projectArray[0].data = null;

    while (wholeItem.firstChild){
        wholeItem.removeChild(wholeItem.lastChild);
    }
})