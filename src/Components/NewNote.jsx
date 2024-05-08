import { useState } from "react";
import { createNote } from "../data/fetch";
import { useNavigate } from "react-router-dom";
import "./NewNote.css";

export default function NewNote() {
    const navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        body: "",
        category: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        createNote(note)
            .then((response) => {
                navigate(`/note/${response.id}`);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handleTextChange(event) {
        setNote({
            ...note,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form id="new-note" onSubmit={handleSubmit}>
            <div className="create-new-note-container">
                <h1 className="new-note">New Note</h1>
                <div className="note-inputs">
                    <label className="label" htmlFor="title">Title:</label>
                    <input
                        className="title-border"
                        type="text"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={handleTextChange}
                    />

                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={note.body}
                        onChange={handleTextChange}
                    ></textarea>

                    <label htmlFor="category">Category:</label>
                    <select
                        name="category"
                        id="category"
                        value={note.category}
                        onChange={handleTextChange}
                    >
                        <option value="school">School</option>
                        <option value="house">House</option>
                        <option value="ideas">Ideas</option>
                    </select>

                    <button className="submit-button" type="submit">Submit</button>
                </div>

                <div className="note-preview">
                    <h3>Note Preview</h3>
                    <p><strong>Title:</strong> {note.title}</p>
                    <p><strong>Body:</strong> {note.body}</p>
                    <p><strong>Category:</strong> {note.category}</p>
                </div>
            </div>
        </form>
    );
}



{/* 
COMPONENT MAP (Front End):
1. Home(Main):
	a. Notes List ( in the main page): first page we see
	b. Header (child of main) - every page
	c. Search bar - every page


![[Home Main.png]] - 

	
2. Note - sibling of main: after clicking  it will be own separate "title" - has its own page
		1. Form filled w/ existing data
		2. Add edit and delete function


![[Title Page.png]]
	
3. New Note
		a. Create Note form (child component) - unique page
		b.  Edit Note Form 
*Mike working on the New Note Page*
![[New Note 2.png]]
![[]]
4. About Us 
	a. About US
		1. Info (Mission statement, About Team)
		2. Site Map (Lists all component pages)

![[]]

https://github.com/10-6-pursuit/note-taking-app?tab=readme-ov-file

https://www.figma.com/file/o4Ci5ezn6OmP0yW7TaAAvS/Note-Taking-App-Wireframes?type=whiteboard&node-id=0-1

```
`/notes - <NotesList> (index/home page)` `/notes/:id - <Note> (show)` `/notes/new - <NewNoteForm> (new)` `/notes/:id/edit - <EditNoteForm> (edit)` `/about - <AboutUs> (information about the team)`


Let's break down each aspect of the code:

1. **Imports**:
   - `import { useState } from "react";`: This imports the `useState` hook from React, which allows functional components to manage state.
   - `import { createNote } from "../data/fetch";`: This imports the `createNote` function from the `fetch.js` file in the `data` directory. This function is responsible for sending a request to create a new note.
   - `import { useNavigate } from "react-router-dom";`: This imports the `useNavigate` hook from `react-router-dom`, which provides the ability to navigate programmatically.
   - `import "./NewNote.css";`: This imports the CSS file for styling the NewNote component.

2. **Function Component**:
   - `export default function NewNote() { ... }`: This defines a functional component named `NewNote`, which represents the form for creating a new note.

3. **State Management**:
   - `const [note, setNote] = useState({ title: "", body: "", category: "" });`: This initializes the state for the note. It includes the `title`, `body`, and `category` fields, all initially set to empty strings.

4. **Event Handlers**:
   - `function handleSubmit(event) { ... }`: This function is triggered when the form is submitted. It prevents the default form submission behavior, calls the `createNote` function to create a new note using the current state (`note`), and then navigates to the newly created note's page.
   - `function handleTextChange(event) { ... }`: This function is triggered when the value of any input field changes. It updates the `note` state with the new value entered by the user.

5. **Form JSX**:
   - The JSX code within the `return` statement represents the form for creating a new note. It consists of three input fields (`title`, `body`, `category`), each with corresponding labels and input elements.
   - The `onChange` event is attached to each input field to call the `handleTextChange` function, updating the state as the user types.
   - The `onSubmit` event of the form triggers the `handleSubmit` function when the user submits the form, creating a new note.

Overall, this component represents the form interface for creating a new note. It uses state management hooks (`useState`) to manage form data and provides event handlers (`handleSubmit`, `handleTextChange`) to handle form submission and user input changes. Additionally, it utilizes routing (`useNavigate`) to navigate to different pages after the form is submitted.

import { useState } from "react";
import { createNote } from "../data/fetch";
import { useNavigate } from "react-router-dom";
import "./NewNote.css";

export default function NewNote() {
    let navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        body: "",
        category: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        createNote(note)
            .then((response) => {
                navigate(`/note/${response.id}`);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handleTextChange(event) {
        setNote({
            ...note,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form id="new-note" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={note.title}
                onChange={handleTextChange}
            />

            <label htmlFor="body">Body:</label>
            <input
                type="text"
                id="body"
                name="body" 
                value={note.body}
                onChange={handleTextChange}
            />

            <label htmlFor="category">Category:</label>
            <select
                name="category"
                id="category"
                value={note.category}
                onChange={handleTextChange}
            >
                <option value="school">School</option>
                <option value="house">House</option>
                <option value="ideas">Ideas</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}


 */}
