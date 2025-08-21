const header = document.querySelector(".header");

const wipeButton = document.createElement("button");
    wipeButton.textContent = "Wipe Data";
    wipeButton.style.color = "red";
    header.appendChild(wipeButton);

export {wipeButton};