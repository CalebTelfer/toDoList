export function clearContent() {
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");

    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}