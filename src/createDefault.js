import List from "./list";
import displayTasks from "./displayTasks";
import { sidebar } from "./modal";
import { projectArray, currentList } from "./modal";

const defaultTitleSidebar = document.createElement("div");
defaultTitleSidebar.textContent = `Default`;
sidebar.appendChild(defaultTitleSidebar);

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