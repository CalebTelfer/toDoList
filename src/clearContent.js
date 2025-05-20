export function clearContent(contentOnly) {
    const content = document.getElementById("content");

    if(contentOnly) {
        while (content.firstChild) {
        content.removeChild(content.firstChild);
        }
    } else { //remove nav buttons too
        const nav = document.querySelector("nav");

        while (nav.firstChild) {
            nav.removeChild(nav.firstChild);
        }

        while (content.firstChild) {
            content.removeChild(content.firstChild);
     }
    }
}