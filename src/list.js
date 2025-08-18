import Task from "./task.js";

export default class List {
    constructor(name) {
        this.name = name;
        this.data = [];
        this.selectedTask;
    }

    addTask(name, dueDate, desc, urgency) {
        const newTask = new Task(`${name}`);
        if (name === "") {
            newTask.name = 'Add a name'
        }
        if (dueDate !== undefined) {
        newTask.dueDate = `${dueDate}`;
        }
        if (dueDate === ``) {
            newTask.dueDate = `Anytime`
        }
        if (desc === "") {
            newTask.desc = `Add extra information here`;
        }
        if (desc !== "") {
            newTask.desc = `${desc}`;
        }
        if (urgency !== undefined) {
            newTask.urgency = `${urgency}`;
        }
        console.log(`New task made: ${newTask.name}, ${newTask.dueDate}, ${newTask.desc}`);
        if (this.data !== null){
        this.data.push(newTask);
        }
    }

    showTasks () {
        console.table(this.data);
    }

    editTask (num, action, value) {
        this.selectedTask = this.data[num - 1];
        console.log(this.selectedTask);

        if (action === "name") {
            this.selectedTask.name = value;
        }
        if (action === "date") {
            this.selectedTask.dueDate = value;
        }
        if (action === "describe") {
            this.selectedTask.desc = value;
        }
        if (action === "urgency") {
            this.selectedTask.urgency = value;
        }
        if (action !== "name" && action !== "date" && action !== "describe" && action !== "urgency" && action !== "delete") {
            console.error("Edit action must be a valid command. Check editTask in list.js for a list of valid commands!");
        }
        if (num > this.data.length) {
            console.error("List Item does not exist");
        }
        if (action === "delete") {
            this.data.splice(num - 1, 1);
        }
    }


}