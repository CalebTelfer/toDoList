import { clearContent } from "./clearContent";
import { Project } from "./createProject";
import { viewProjectsPage } from "./viewProjectsPage";

export function addToDoItem(index) {
    let projectsData = JSON.parse(localStorage.getItem('projects'));
    const project = new Project(projectsData[index].name);
    project.todos = projectsData[index].todos;




    clearContent(1);
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");

        const form = document.createElement("form");
        const label = document.createElement("label");
        const input = document.createElement("input");

        const label2 = document.createElement("label");
        const input2 = document.createElement("input");
        label.textContent = "Enter New Todo Name. "
    
    
        label.style.fontSize = "2rem";
    
        input.style.height = "2rem";
        input.style.width = "24rem";
        input.style.color = "black";

        label2.textContent = "Enter New Todo Desc. "
    
    
        label2.style.fontSize = "2rem";
    
        input2.style.height = "2rem";
        input2.style.width = "24rem";
        input2.style.color = "black";

        const submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.style.height = "4rem";
        submit.style.width = "14rem";
        form.appendChild(submit);
    
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
            project.addTodo({
                title: input.value,
                desc: input2.value
            })

            projectsData.splice(index, 1);
            projectsData.push(project);
            localStorage.setItem('projects', JSON.stringify(projectsData));
            viewProjectsPage(); //place holder. would like to update to viewProjects page by default after new creation.
        })
    
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(label2);
        form.appendChild(input2);
        content.appendChild(form);

}