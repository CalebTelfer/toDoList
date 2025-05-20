import { clearContent } from "./clearContent";
import { createProject } from "./createProject";
import { loadHomePage } from "./home-page";
import { viewProjectsPage } from "./viewProjectsPage";

export function loadCreateAProjectPage() {
    clearContent();
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");


        const viewProjects = document.createElement("h2");
    
        viewProjects.textContent = "View Projects";
    
        viewProjects.style.cursor = "pointer";
    
        viewProjects.addEventListener("click", function() {
            viewProjectsPage();
    
        })
    
    
        nav.appendChild(viewProjects);


    const defaultText = document.createElement("h1");
    defaultText.textContent = "Select an option on the left-hand side to begin!";
    defaultText.style.fontSize = "5rem";
    defaultText.style.height = "6rem";
    defaultText.style.display = "flex";
    defaultText.style.alignContent = "center";
    defaultText.style.justifyContent = "center";
    defaultText.style.backgroundColor = "#73946B";
    content.appendChild(defaultText);

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
        const projectName = input.value;
        createProject(projectName);
        loadHomePage(); //place holder. would like to update to viewProjects page by default after new creation.
    })

    form.appendChild(label);
    form.appendChild(input);
    content.appendChild(form);
}