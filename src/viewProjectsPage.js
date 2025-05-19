import { clearContent } from "./clearContent";

export function viewProjectsPage() {
    let projects = JSON.parse(localStorage.getItem('projects'));

    if(projects) {
        clearContent();
        //populate page with projects
    } else {
        const noticeText = document.querySelector("#content > h1");
        noticeText.textContent = "You do not have any projects to view!";
    }

}