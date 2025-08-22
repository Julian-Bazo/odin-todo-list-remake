import displayTasks from "./displayTasks";
import { sidebar } from "./modal";
import { createTaskButton, setCurrentList, currentList } from "./modal";
import { projectArray } from "./modal";

export default function createTitle(list) {
    let workingArray = JSON.parse(localStorage.getItem("Array"));
    
    setCurrentList(projectArray[0]);
    displayTasks(currentList);
    
    const wholeItem = document.createElement('div');
        wholeItem.classList.add("sidebar-item");
        sidebar.appendChild(wholeItem);

    const newProj = document.createElement("div");
        newProj.textContent = list.name;
        newProj.classList.add("item-title");
        wholeItem.appendChild(newProj);

    const deleteButton = document.createElement("div");
        deleteButton.classList.add("delete-button");
        deleteButton.id = `${list.name}`;
        wholeItem.appendChild(deleteButton);

    newProj.addEventListener("click", () => {
        if (list._name !== "Default") {
            createTaskButton.style.display = "block";
        }
        if (list.name === "Default"){
            createTaskButton.style.display = "none";
        }

        const index = projectArray.findIndex(item => item.name === list.name);
    
        setCurrentList(projectArray[index]);
        console.log(currentList);

        displayTasks(currentList);
    })

    wholeItem.addEventListener("click", () => {
        const index = projectArray.findIndex(item => item.name === list.name);
        setCurrentList(projectArray[index]);
    })

    deleteButton.addEventListener("click", () => {
        console.log(projectArray);
        const index = projectArray.findIndex(item => item.name === list.name);
        console.log(projectArray[index]);
        projectArray.splice(index, 1);
        sidebar.removeChild(wholeItem);
        console.log(projectArray);
    })


}