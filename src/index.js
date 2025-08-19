import "./styles.css";
import { formatDate } from "date-fns";
import Task from "./task.js";
import List from "./list.js";
import "./modal.js";
import { list, createTaskButton,  inputTitle, nameInput, dateInput, descInput, urgencyInput, titleData, nameData, dateData, descData, urgencyData} from "./modal.js";
import displayTasks from "./displayTasks.js";
import createDefaultList from "./createDefault.js";

createDefaultList();



// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// GETTER: sampleTask.name gives you the getter
// SETTER: sampleTask.name = "Now different!";

// List name bolded when selected
// Beautify App
// Test local memory plugin
// Test webkit development to production swap
