import { format } from "date-fns";
import clearContent from "./clearContent";


const content = document.querySelector(".list");


export default function displayTasks(list) {

    clearContent();

    // Displaying array information

    if (list.data !== null) {
    for (const task of list.data) {

        const wholeTask = document.createElement("div");
        content.appendChild(wholeTask);
        wholeTask.classList.add("whole-task");

        const itemData = document.createElement("div");
        wholeTask.appendChild(itemData);

        const editTaskButton = document.createElement("button");
        editTaskButton.textContent = "Edit/Remove";
        wholeTask.appendChild(editTaskButton);

        editTaskButton.addEventListener("click", () => {

            const editModal = document.createElement("form");
            editModal.classList.add("edit-modal");
            content.appendChild(editModal);
            editModal.style.display = "block";

            const closeEditModalButton = document.createElement("button");
            closeEditModalButton.textContent = "X";
            closeEditModalButton.type = "button";
            editModal.appendChild(closeEditModalButton);

            closeEditModalButton.addEventListener("click", () => {
                resetEditModal.click();
                editModal.style.display = "none";
                console.log("Exiting modal");
            })

            const editName = document.createElement("input");
            editName.type = "text";
            editName.id = "edit-name";
            editName.placeholder = "New name";
            editModal.appendChild(editName);
            
            const editDate = document.createElement("input");
            editDate.type = "date";
            editDate.id = "edit-date";
            editModal.appendChild(editDate);
            
            const editDesc = document.createElement("textarea");
            editDesc.id = "edit-desc";
            editDesc.rows = "2";
            editDesc.cols = "33";
            editDesc.placeholder = "New description...";
            editModal.appendChild(editDesc);
            
            const editUrgency = document.createElement("input");
            editUrgency.type = "checkbox";
            editUrgency.id = "edit-urgency";
            editModal.appendChild(editUrgency);
            
            const editSubmitButton = document.createElement("button");
            editSubmitButton.type = "button";
            editSubmitButton.textContent = "Edit Task";
            editModal.appendChild(editSubmitButton)
            
            const removeTaskButton = document.createElement("button");
            removeTaskButton.textContent = "Remove Task"
            removeTaskButton.type = "button";
            removeTaskButton.style.color = "red";
            editModal.appendChild(removeTaskButton);

            removeTaskButton.addEventListener("click", () => {
                console.log(list.data);
                console.log("Remove task button was clicked");
                list.data.splice(list.data.indexOf(task), 1);
                console.log(list.data);
                displayTasks(list);
                closeEditModalButton.click();
            })

            editSubmitButton.addEventListener("click", () => {
                if (editName.value !== "") {
                    task.name = editName.value;
                }
                if (editDate.value !== "") {
                    task.dueDate = format(new Date(editDate.value), "MM/dd");
                }
                if (editDesc.value !== "") {
                    task.desc = editDesc.value;
                }
                if (editUrgency.checked === true) {
                    task.urgency = "true";
                }
                if (editUrgency.checked === false) {
                    task.urgency = "false";
                }
                displayTasks(list);
                closeEditModalButton.click();
            })

            const resetEditModal = document.createElement("button");
            resetEditModal.type = "reset";
            resetEditModal.style.display = "none";
            editModal.appendChild(resetEditModal);
            
        })

        const nameSection = document.createElement("div");
            nameSection.textContent = `${task._name}`;
            itemData.appendChild(nameSection);

        const dateSection = document.createElement("div");
            dateSection.textContent = `${task._dueDate}`;
            itemData.appendChild(dateSection);

        const descSection = document.createElement("div");
        descSection.classList.add("short-desc");

        descSection.addEventListener("mouseenter", () => {
            descSection.classList.remove("short-desc");
        })

        descSection.addEventListener('mouseout', () => {
            descSection.classList.add("short-desc");
        })

        descSection.textContent = `${task._desc}`;
        if (task._urgency === "true") {
            itemData.classList.add("urgent");
        }
        itemData.appendChild(descSection);

    }
}


}

export {content};


