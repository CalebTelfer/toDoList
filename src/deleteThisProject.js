import { loadViewProjectsPage } from "./viewProjects-Page";

export function deleteThisProject(index) {

            let projectsData = JSON.parse(localStorage.getItem('projects'));
            projectsData.splice(index, 1);
            localStorage.setItem('projects', JSON.stringify(projectsData));

            loadViewProjectsPage();
}