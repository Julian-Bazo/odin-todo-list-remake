import "./styles.css";

import Task from "./task.js";

const task1 = new Task("Get eggs");
task1.dueDate = "04/32"
task1.urgency = "true";

console.table(task1);