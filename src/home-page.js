import { clearContent } from "./clearContent";
import { viewProjectsPage } from "./viewProjectsPage";

export function loadHomePage() {
    
    clearContent();
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");


    const viewProjects = document.createElement("h2");
    const createNewProject = document.createElement("h2");
    const deleteAProject = document.createElement("h2");

    viewProjects.textContent = "View Projects";
    createNewProject.textContent = "Create a Project";
    deleteAProject.textContent = "Delete a Project";

    viewProjects.style.cursor = "pointer";
    createNewProject.style.cursor = "pointer";
    deleteAProject.style.cursor = "pointer";

    viewProjects.addEventListener("click", function() {
        viewProjectsPage();

    })

    createNewProject.addEventListener("click", function() {
        
    })

    deleteAProject.addEventListener("click", function() {
        
    })



    nav.appendChild(viewProjects);
    nav.appendChild(createNewProject);
    nav.appendChild(deleteAProject);


    const defaultText = document.createElement("h1");
    defaultText.textContent = "Select an option on the left-hand side to begin!";
    defaultText.style.fontSize = "5rem";
    defaultText.style.display = "flex";
    defaultText.style.alignContent = "center";
    defaultText.style.justifyContent = "center";
    defaultText.style.backgroundColor = "#73946B";
    content.appendChild(defaultText);
}