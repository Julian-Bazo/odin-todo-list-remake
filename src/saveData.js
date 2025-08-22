import { projectArray } from "./modal";


export default function saveData() {
    let listIndex = 0;
    let taskIndex = 0;
    // let saveArray = 0;

    localStorage.setItem("Array", JSON.stringify(projectArray));

    for (const list of projectArray) {
        taskIndex = 0;
        localStorage.setItem(`L${listIndex}`, JSON.stringify(list));
        console.log(list);
        for (const task of list.data) {
            localStorage.setItem(`L${listIndex}T${taskIndex}`, JSON.stringify(task));
            taskIndex++;
        }
        listIndex++;
    }

}