import Task from "./task.js";

export default class List {
    constructor(name) {
        this.name = name;
        this.data = [];
        this.selectedTask = this.data[0];
    }

    addTask(name) {
        const newTask = new Task(`${name}`);
        this.data.push(newTask);
    }

    showTasks () {
        console.table(this.data);
    }

    selectTask (num) {
        this.selectedTask = this.data[num - 1];
        console.log(this.selectedTask);
    }
    

}