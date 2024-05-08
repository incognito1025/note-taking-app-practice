const BASE_URL = "https://my-json-server.typicode.com/RazEfron/demo/notes";

export function getOneNote (id) {
    return fetch(`${Base_URL}/notes/${id}`)
    .then(response => response.json())
}

export function getAllNotes () {
    return fetch(BASE_URL)
    .then(response => response.json())
}

export function createNote() {}