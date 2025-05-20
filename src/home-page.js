import { clearContent } from "./clearContent";
import { viewProjectsPage } from "./viewProjectsPage";
import { loadCreateAProjectPage } from "./createProject-Page";

export function loadHomePage() {
    
    clearContent();
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");


    const viewProjects = document.createElement("h2");
    const createNewProject = document.createElement("h2");

    viewProjects.textContent = "View Projects";
    createNewProject.textContent = "Create a Project";

    viewProjects.style.cursor = "pointer";
    createNewProject.style.cursor = "pointer";

    viewProjects.addEventListener("click", function() {
        viewProjectsPage();

    })

    createNewProject.addEventListener("click", function() {
        loadCreateAProjectPage();
    })

    nav.appendChild(viewProjects);
    nav.appendChild(createNewProject);


    const defaultText = document.createElement("h1");
    defaultText.textContent = "Select an option on the left-hand side to begin!";
    defaultText.style.fontSize = "5rem";
    defaultText.style.height = "6rem";
    defaultText.style.display = "flex";
    defaultText.style.alignContent = "center";
    defaultText.style.justifyContent = "center";
    defaultText.style.backgroundColor = "#73946B";
    content.appendChild(defaultText);
}