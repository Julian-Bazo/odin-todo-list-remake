import "./styles.css";

import Task from "./task.js";
import List from "./list.js";

const newList = new List("Standard List");
newList.addTask("Grab eggs");
newList.addTask("Buy some fish");


console.table(newList);
newList.showTasks();
newList.selectTask(1);