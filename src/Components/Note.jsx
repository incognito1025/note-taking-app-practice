import "./Note.css";
import { Link } from "react-router-dom";

export default function Note({ note }) {
    return (
        <div className="note-container">
            <h1><Link to={`/${note.id}`}>{note.title}</Link></h1>
            <h3>{note.body}</h3>
            <h5>#{note.category}</h5>
        </div>
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
``` 




import "./Note.css";
import { Link } from "react-router-dom"; // This import statement brings in the Link component from the React Router DOM library. The Link component is used to create hyperlinks within the application and enables navigation to different routes.



//export default function Note({ note }) { ... } This syntax defines a functional component named Note. The component accepts a single prop named note, which represents the data for a single note item.

// JSX structure. <div className="note-container"> ... </div>: This div serves as a container for the entire note item.

// <h1><Link to={/${note.id}}>{note.title}</Link></h1> This h1 element displays the title of the note. Inside the h1, a Link component is used to wrap the note.title text. The to prop of the Link component specifies the URL path to navigate to when the link is clicked. In this case, it's dynamically set to /${note.id}, where note.id represents the unique identifier of the note.

So, when a user clicks on the note title, it navigates to a separate page (specified by the URL path /notes/:id) to view the detailed content of the note.
<h3>{note.body}</h3>: This h3 element displays the body/content of the note.
<h5>#{note.category}</h5>: This h5 element displays the category of the note. The # symbol is used as a prefix to indicate that it's a category.


export default function Note({ note }) {
    return (
        <div className="note-container">
            <h1><Link to={`/${note.id}`}>{note.title}</Link></h1>
            <h3>{note.body}</h3>
            <h5>#{note.category}</h5>
        </div>
    );
}








*/}

