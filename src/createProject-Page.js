
export function loadCreateAProjectPage() {
    const content = document.getElementById("content");


    const noticeText = document.querySelector("#content > h1");
    noticeText.textContent = "Please Create a Project!";

    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.textContent = "Enter Project Name: "


    label.style.fontSize = "2rem";

    input.style.height = "2rem";
    input.style.width = "24rem";
    input.style.color = "black";

    form.style.display = "flex";
    form.style.alignItems = "center";
    form.style.justifyContent = "center";
    form.style.backgroundColor = "#A0C878";
    form.style.height = "30vh";
    form.style.width = "60vw";
    form.style.marginLeft = "auto";
    form.style.marginRight = "auto";
    form.style.gap = "2rem";


    form.addEventListener("submit", function(event) {
        event.preventDefault();
        input.value = "";

        // logic to add a project. :) probably a new module 

    })

    form.appendChild(label);
    form.appendChild(input);
    content.appendChild(form);
}