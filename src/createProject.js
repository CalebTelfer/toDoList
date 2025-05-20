export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    getTodos() {
        return this.todos;
    }
}



export function createProject(projectName) {
    const newProject = new Project(projectName);
    let projectsArray = JSON.parse(localStorage.getItem('projects'));

    if (!projectsArray) {
        projectsArray = [];
    }

    projectsArray.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projectsArray));

}