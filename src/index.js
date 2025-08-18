import "./styles.css";

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

// to remove old lists set list instance to null and then unmount all associated elements from the DOM

// Figure out how to get default list to properly allow for adding tasks to it.

// Try to wipe list title data to prevent permanently retired list names
// Find a way to properly reset data on delete
// When no list is selected the items are currently getting sent to the non-fully deleted list
// Select an invisible trash list that pops values out as they get added?
// List name bolded when selected
// Hide task creation button on list delete
