import "./styles.css";
import "./modal.js";
import {clearProjectArray} from "./modal.js";
import createDefaultList from "./createDefault.js";
import saveData from "./saveData.js";
import loadData from "./loadData.js";
import { wipeButton } from "./wipeData.js";

let data = JSON.parse(localStorage.getItem("Array"));
console.log(data.length);
window.addEventListener("beforeunload", (e) => {
    saveData();
});

window.addEventListener("load", (e) => {
if ((data.length >= 1)){
    loadData();
}
else {
    createDefaultList();
}
})

wipeButton.addEventListener("click", () => {
    localStorage.clear();
    clearProjectArray();
    location.reload();
    console.log("Data wiped!");
})


// Reminder on setters and getters
// const sampleTask = new Task("Tutorial");
// console.log(sampleTask);
// GETTER: sampleTask.name gives you the getter
// SETTER: sampleTask.name = "Now different!";

// List name bolded when selected
// Beautify App
// Test local memory plugin
// Test webkit development to production swap

// Wipe data removes updates saveData to reflect emptied localstorage
// Ability to remove lists and they do not repopulate on reload
// What happens when all the lists are removed