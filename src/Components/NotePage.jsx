import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneNote } from '../data/fetch';
import './NotePage.css';

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState({ title: "", content: "" });

    useEffect(() => {
        getOneNote(id)
            .then(data => setNote(data))
            .catch(error => console.error('Error fetching note:', error));
    }, [id]);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting form...', note);
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Note</h1>
            <label>
                Title:
                <input type="text" name="title" value={note.title} onChange={handleChange} />
            </label>
            <label>
                Content:
                <textarea name="content" value={note.content} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NotePage;


/*

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
```




import { useParams } from "react-router-dom"; //import { useParams } from "react-router-dom";: This import statement allows us to access route parameters in the URL. In this case, it enables us to retrieve the id parameter from the URL.

import { useEffect, useState } from "react"; // These imports are from React's built-in hooks. They enable us to use state and lifecycle methods within functional components.

import { getOneNote } from '../data/fetch'; //This import brings in the getOneNote function from a separate file (fetch.js in the data directory). This function is responsible for fetching a single note from the backend.

import './NotePage.css'; //This import statement links the component to its associated CSS file, providing styles for the component's layout and appearance.



//  Main functional component responsible for rendering the note editing page.

function NotePage() {
    const { id } = useParams();  // It uses the useParams hook to extract the id parameter from the URL, which is used to identify the specific note being edited.
    const [note, setNote] = useState({ title: "", content: "" }); // It initializes state using the useState hook. The note state contains the title and content of the note being edited.


//Uses useEffect hook to fetch the note data when the component mounts or when the id parameter changes. This ensures that the note data is fetched from the backend API and updated in the component state.

    useEffect(() => {  //
        getOneNote(id)
            .then(data => setNote(data))
            .catch(error => console.error('Error fetching note:', error));
    }, [id]);


   //handleChange is called whenever the user types in the input fields or textarea, updating the corresponding state (note.title or note.content) with the new value. handleChange: This function is responsible for updating the note state when the user types in the input fields or textarea. It extracts the name and value of the input element triggering the change event and updates the corresponding property (title or content) of the note state using the setNote function.

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };


    //handleSubmit is called when the form is submitted. It prevents the default form submission behavior (which would cause a page refresh), logs the current state of the note, and can be extended to handle form submission logic such as updating the note on the backend. handleSubmit: This function is called when the form is submitted. It prevents the default form submission behavior, logs the current state of the note to the console, and can be extended to handle form submission logic such as sending the updated note data to the backend API.

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting form...', note);
    };


    // The JSX returned by the component renders a form with input fields for editing the note's title and content. Event handlers (onChange and onSubmit) are attached to the form elements to handle user input and form submission. The JSX returned by the component renders a form with input fields for editing the note's title and content. The value attribute of each input field is bound to the corresponding property (title or content) of the note state, ensuring that the input fields reflect the current state of the note being edited.Event handlers (onChange for input fields and onSubmit for the form) are attached to the form elements to handle user input and form submission.

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Note</h1>
            <label>
                Title:
                <input type="text" name="title" value={note.title} onChange={handleChange} />
                </label>
                <label>
                    Content:
                    <textarea name="content" value={note.content} onChange={handleChange}></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
    
    export default NotePage;
*/