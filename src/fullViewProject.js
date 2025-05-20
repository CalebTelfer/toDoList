import { clearContent } from "./clearContent";
import { loadCreateAProjectPage } from "./createProject-Page";
import { deleteThisProject } from "./deleteThisProject";
import { viewProjectsPage } from "./viewProjectsPage";
import { addToDoItem } from "./addToDo";

export function fullViewProject(index) {
    let projectsData = JSON.parse(localStorage.getItem('projects'));
    const project = projectsData[index];

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
    defaultText.textContent = "Project: Full Viewer";
    defaultText.style.fontSize = "5rem";
    defaultText.style.height = "6rem";
    defaultText.style.display = "flex";
    defaultText.style.alignContent = "center";
    defaultText.style.justifyContent = "center";
    defaultText.style.backgroundColor = "#73946B";
    content.appendChild(defaultText);


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

    const div = document.createElement("div");
    div.style.height = "90%";
    div.style.width = "90%";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = "#73946B";
    div.style.borderRadius = "5px";


    const pName = document.createElement("h2");
    pName.textContent = project.name;
    div.appendChild(pName);


    const todoDiv = document.createElement("div");
    const numTodos = project.todos.length;

    for (let i = 0; i < numTodos; i++) {
        const todoName = document.createElement("h3");
        const desc = document.createElement("h4");

        todoName.textContent = project.todos[i].title;
        desc.textContent = project.todos[i].desc;

        todoDiv.appendChild(todoName);
        todoDiv.appendChild(desc);
    }


    div.appendChild(todoDiv);

    const buttonDiv = document.createElement("div");
    buttonDiv.style.display = "flex";
    buttonDiv.style.gap = "2rem";

    const deleteProject = document.createElement("button");
    const addToDo = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    addToDo.textContent = "Add To-Do";
    deleteProject.style.width = "12rem";
    deleteProject.style.height = "4rem";
    addToDo.style.width = "12rem";
    addToDo.style.height = "4rem";
    deleteProject.style.backgroundColor = "#9EBC8A";
    addToDo.style.backgroundColor = "#9EBC8A";
    deleteProject.style.borderStyle = "none";
    addToDo.style.borderStyle = "none"; // note. im realizing now that having a class in css file for all this is how its supposed to be done lol.
    deleteProject.style.cursor = "pointer";
    addToDo.style.cursor = "pointer";
            
    deleteProject.addEventListener("click", function(e) {
        const projectDiv = e.target.parentElement.parentElement;
        const projectName = projectDiv.querySelector("h2");
        const index = projectsData.findIndex(project => project.name === projectName.textContent);
        deleteThisProject(index);
    })

    addToDo.addEventListener("click", function(e) {
        const projectDiv = e.target.parentElement.parentElement;
        const projectName = projectDiv.querySelector("h2");
        const index = projectsData.findIndex(project => project.name === projectName.textContent);
        addToDoItem(index);
    })

    buttonDiv.appendChild(addToDo);
    buttonDiv.appendChild(deleteProject);
    div.appendChild(buttonDiv);
    projectsContainer.appendChild(div);
}