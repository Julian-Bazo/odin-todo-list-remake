import "./styles.css";

import Task from "./task.js";
import List from "./list.js";

// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// sampleTask.name = "Now different!";
// console.log(sampleTask);

const newList = new List("Standard List");
newList.addTask("Grab eggs", "04/23", "", "false");
newList.addTask("Buy some fish");


console.table(newList);
newList.showTasks();
newList.editTask(1, "name", "No more eggs");
newList.editTask(2, "date", "4/20");
newList.editTask(2, "urgency", "true");
newList.editTask(2, "describe", "A sample description");
// newList.editTask(1, "delete");

newList.showTasks();