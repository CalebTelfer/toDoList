import { clearContent } from "./clearContent";
import { loadViewProjectsPage } from "./viewProjects-Page";

export function viewProjectsPage() {
    let projects = JSON.parse(localStorage.getItem('projects'));

    if(projects) {
        clearContent();
        loadViewProjectsPage();
    } else {
        clearContent(1)
        const content = document.getElementById("content");
        const defaultText = document.createElement("h1");
        defaultText.textContent = "You do not have any projects to view!";
        defaultText.style.fontSize = "5rem";
        defaultText.style.display = "flex";
        defaultText.style.alignContent = "center";
        defaultText.style.justifyContent = "center";
        defaultText.style.backgroundColor = "#73946B";
        content.appendChild(defaultText);
    }
}