const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function ab(event) {
    event.preventDefault();
}

function checkbox(event) {
    event.preventDefault();
}

function texto(event) {
    if (event.key !== 'a') {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', ab);
INPUT_CHECKBOX.addEventListener('click', checkbox);
INPUT_TEXT.addEventListener('keypress', texto);
