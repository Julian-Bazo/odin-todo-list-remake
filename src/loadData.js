import { projectArray } from "./modal";
import createTitle from "./createTitle";

export default function loadData() {
    let workingArray = JSON.parse(localStorage.getItem("Array"));
    let index = workingArray.length;
    console.log(workingArray);
    console.log(index);
    workingArray.map((list) => {
        createTitle(list);
    })

}