import { projectArray } from "./modal";
import createTitle from "./createTitle";
import List from "./list";

export default function loadData() {
    let workingArray = JSON.parse(localStorage.getItem("Array"));
    let listIndex = 0;
    workingArray.map((list) => {
        let newList = JSON.parse(localStorage.getItem(`L${listIndex}`));
        let taskIndex = newList.data.length;
        console.log(taskIndex);
        newList = new List(newList.name);
        for (let i = 0; i < taskIndex; i++) {
            const parsed = JSON.parse(localStorage.getItem(`L${listIndex}T${i}`));
            newList.addTask(parsed._name, parsed._dueDate, parsed._desc, parsed._urgency);
        }
        console.log(newList);
        projectArray.push(newList);
        listIndex++;
        createTitle(newList);
    })
    console.log(projectArray);

}