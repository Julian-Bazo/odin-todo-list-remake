import "./styles.css";

import Task from "./task.js";
import List from "./list.js";
import "./modal.js";
import { createTaskButton,  inputTitle, nameInput, dateInput, descInput, urgencyInput, titleData, nameData, dateData, descData, urgencyData} from "./modal.js";




// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// sampleTask.name = "Now different!";
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
// Add project names to sidebar
// Add and update tasks in content section