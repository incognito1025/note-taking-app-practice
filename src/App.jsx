import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import "./Components/AboutUs.css";
import NewNote from "./Components/NewNote";
import "./Components/NewNote.css";
import Note from "./Components/Note";
import "./Components/Note.css";
import NoteList from "./Components/NoteList";
import "./Components/NoteList.css";
import NotePage from "./Components/NotePage";
import Nav from "./Components/Nav";
import "./Components/Nav.css";
import Footer from "./Components/Footer";
import "./Components/Footer.css";
import SearchBar from "./Components/SearchBar";
import "./Components/SearchBar.css";
import SiteMap from "./Components/SiteMap";
import "./Components/SiteMap.css";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/notes/:id' element={<NotePage />} />
        <Route path='/notes/new' element={<NewNote />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;



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

*/