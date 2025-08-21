import "./styles.css";
import { formatDate } from "date-fns";
import Task from "./task.js";
import List from "./list.js";
import "./modal.js";
import { list, createTaskButton,  inputTitle, nameInput, dateInput, descInput, urgencyInput, titleData, nameData, dateData, descData, urgencyData} from "./modal.js";
import displayTasks from "./displayTasks.js";
import { projectArray } from "./modal.js";
import createDefaultList from "./createDefault.js";
import saveData from "./saveData.js";
import loadData from "./loadData.js";
import { wipeButton } from "./wipeData.js";


let data = JSON.parse(localStorage.getItem("Array"));
console.log(data.length);
window.addEventListener("beforeunload", (e) => {
    saveData();
});

window.addEventListener("load", (e) => {
if ((data.length > 1)){
    loadData();
}
else {
    createDefaultList();
}
})

wipeButton.addEventListener("click", () => {
    localStorage.clear();
    console.log("Data wiped!");
})


// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// GETTER: sampleTask.name gives you the getter
// SETTER: sampleTask.name = "Now different!";

// List name bolded when selected
// Beautify App
// Test local memory plugin
// Test webkit development to production swap

// Get tasks to not be undefined when clicked
