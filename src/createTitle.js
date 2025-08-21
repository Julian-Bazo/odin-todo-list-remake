import displayTasks from "./displayTasks";
import { sidebar } from "./modal";

export default function createTitle(list) {
    const wholeItem = document.createElement('div');
        wholeItem.classList.add("sidebar-item");
        sidebar.appendChild(wholeItem);

    const newProj = document.createElement("div");
        newProj.textContent = list.name;
        newProj.classList.add("item-title");
        wholeItem.appendChild(newProj);

    const deleteButton = document.createElement("div");
        deleteButton.classList.add("delete-button");
        wholeItem.appendChild(deleteButton);

    newProj.addEventListener("click", () => {
        displayTasks(list)
    })
}