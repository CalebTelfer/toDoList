import {logo} from "./logo.svg";

export function loadHomePage() {
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");

    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }


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

    })

    createNewProject.addEventListener("click", function() {
        
    })

    deleteAProject.addEventListener("click", function() {
        
    })



    nav.appendChild(viewProjects);
    nav.appendChild(createNewProject);
    nav.appendChild(deleteAProject);
}