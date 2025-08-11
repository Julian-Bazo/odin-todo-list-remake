import "./styles.css";

import Task from "./task.js";
import List from "./list.js";
import createModal from "./modal.js";

createModal();

// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// sampleTask.name = "Now different!";
// console.log(sampleTask);

let newList = new List("Standard List");
newList.addTask("Grab eggs", "04/23", "", "false");
newList.addTask("Buy some fish");


console.table(newList);
newList.showTasks();
newList.editTask(1, "name", "No more eggs");
newList.editTask(2, "date", "4/20");
newList.editTask(2, "urgency", "false");
newList.editTask(2, "describe", "A sample description");
console.log(`Data: ${newList.data}`);
// newList.editTask(1, "delete");

console.log(`Before deletion: ${newList}`);
console.log(`After deletion: ${newList}`);

newList.showTasks();

// set list instance to null and then unmount all associated elements from the DOM