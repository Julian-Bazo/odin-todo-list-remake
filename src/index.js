import "./styles.css";

import Task from "./task.js";
import List from "./list.js";
import "./modal.js";
import { list, createTaskButton,  inputTitle, nameInput, dateInput, descInput, urgencyInput, titleData, nameData, dateData, descData, urgencyData} from "./modal.js";
import displayTasks from "./displayTasks.js";




// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// GETTER: sampleTask.name gives you the getter
// SETTER: sampleTask.name = "Now different!";

// console.log(sampleTask);

// let newList = new List("Standard List");
// newList.addTask("Grab eggs", "04/23", "", "false");
// newList.addTask("Buy some fish");


// console.table(newList);
// newList.showTasks();
// newList.editTask(1, "name", "No more eggs");
// newList.editTask(2, "date", "4/20");
// newList.editTask(2, "urgency", "false");
// newList.editTask(2, "describe", "A sample description");
// console.log(`Data: ${newList.data}`);
// newList.editTask(1, "delete");

// console.log(`Before deletion: ${newList}`);
// console.log(`After deletion: ${newList}`);

// newList.showTasks();

// to remove old lists set list instance to null and then unmount all associated elements from the DOM

// Add select project functionality or something
// New task information doesnt overlap with multiple lists.