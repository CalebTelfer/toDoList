import { clearContent } from "./clearContent";
import { Project } from "./createProject";
import { loadCreateAProjectPage } from "./createProject-Page";

export function loadViewProjectsPage() {
    clearContent();
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");

    const createNewProject = document.createElement("h2");

    createNewProject.textContent = "Create a Project";

    createNewProject.style.cursor = "pointer";

        createNewProject.addEventListener("click", function() {
            loadCreateAProjectPage();
        })
    

        nav.appendChild(createNewProject);

        const defaultText = document.createElement("h1");
        defaultText.textContent = "Project Overview";
        defaultText.style.height = "6rem";
        defaultText.style.fontSize = "5rem";
        defaultText.style.display = "flex";
        defaultText.style.alignContent = "center";
        defaultText.style.justifyContent = "center";
        defaultText.style.backgroundColor = "#73946B";
        content.appendChild(defaultText);



        //reassigning the objects to classes to get the methods back. Maybe make this a new file. will see.
        let projectsData = JSON.parse(localStorage.getItem('projects'));
        let projects = [];

        projectsData.forEach(project => {
            let newProject = new Project(project.name);
            newProject.todos = project.todos;
            projects.push(newProject);
        });


        const projectsContainer = document.createElement("div");
        projectsContainer.style.backgroundColor = "blue";
        projectsContainer.style.display = "flex";
        projectsContainer.style.gap = "2%";
        projectsContainer.style.justifyContent = "center";
        projectsContainer.style.alignItems = "center";
        projectsContainer.style.height = "calc(100% - 6rem)"; //5rem for the text at the top
        projectsContainer.style.width = "100%";
        projectsContainer.style.backgroundColor = "#A0C878";

        content.appendChild(projectsContainer);
        //populate divs for each project
        projects.forEach(project => {
            const div = document.createElement("div");
            projectsContainer.appendChild(div);

            const pName = document.createElement("h2");
            pName.textContent = project.name;
            div.appendChild(pName);

            const buttonDiv = document.createElement("div");
            buttonDiv.style.display = "flex";
            buttonDiv.style.gap = "2rem";

            const deleteProject = document.createElement("button");
            const fullView = document.createElement("button");
            deleteProject.textContent = "Delete Project";
            fullView.textContent = "View this Project";
            deleteProject.style.width = "12rem";
            deleteProject.style.height = "4rem";
            fullView.style.width = "12rem";
            fullView.style.height = "4rem";
            deleteProject.style.backgroundColor = "#9EBC8A";
            fullView.style.backgroundColor = "#9EBC8A";
            deleteProject.style.borderStyle = "none";
            fullView.style.borderStyle = "none"; // note. im realizing now that having a class in css file for all this is how its supposed to be done lol.
            deleteProject.style.cursor = "pointer";
            fullView.style.cursor = "pointer";
            
            buttonDiv.appendChild(fullView);
            buttonDiv.appendChild(deleteProject);


            const numProjects = projects.length;
            div.style.width = `calc(90% / ${numProjects})`;
            div.style.height = `calc(90% / ${numProjects})`;
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.gap = "5%";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.style.backgroundColor = "#73946B";
            div.style.borderRadius = "5px";

            div.appendChild(buttonDiv);

        })
}