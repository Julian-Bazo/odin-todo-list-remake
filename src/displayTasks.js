import Task from "./task";
import List from "./list";
import { list } from "./modal";
import clearContent from "./clearContent";

const domTest = new List("Dom Test");
domTest.addTask("Go grab eggs", "04/25", "", "false");
domTest.addTask("Fishing day", "06/24", "Hello", "true");

const content = document.querySelector(".list");


export default function displayTasks(list) {

    clearContent();

    // Displaying array information
    for (const task of list.data) {
        const wholeTask = document.createElement("div");
        
        content.appendChild(wholeTask);
        wholeTask.classList.add("whole-task");
        const nameSection = document.createElement("div");
        nameSection.textContent = `${task.name}`;
        wholeTask.appendChild(nameSection);
        const dateSection = document.createElement("div");
        dateSection.textContent = `${task.dueDate}`;
        wholeTask.appendChild(dateSection);
        const descSection = document.createElement("div");
        descSection.textContent = `${task.desc}`;
        console.log(task.desc);
        console.log(task.urgency);
        if (task.urgency === "true") {
            wholeTask.classList.add("urgent");
        }
        wholeTask.appendChild(descSection);

    }


}

export {content};

displayTasks(domTest);
