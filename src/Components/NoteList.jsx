import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllNotes } from "../data/fetch";
import Note from "./Note";

export default function NoteList() {
    const [notes, setNotes] = useState([]);
    const [searchNote, setSearchNote] = useState("");

    useEffect(() => {
        getAllNotes()
            .then((data) => {
                setNotes(data);
            })
            .catch((error) => {
                console.error("Error fetching notes:", error);
            });
    }, []);

    const handleTextChange = (event) => {
        setSearchNote(event.target.value);
    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchNote.toLowerCase())
    );

    // Generate placeholder notes for the remaining grid cells
    const placeholderNotes = Array.from({ length: 12 - filteredNotes.length }).map((_, index) => ({
        id: `placeholder-${index + 1}`,
        title: "Title",
        body: "Body text will be replaced when data is fetched.",
        category: "Category"
    }));

    return (
        <div>
            <div className="note-list-container">
            {[...filteredNotes, ...placeholderNotes].map((note) => (
    <article className="notes" key={note.id}>
        <h3 className="title">
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </h3>
        <p className="body">{note.body}</p>
        <aside className="category">
            <p>
                <span></span> {/* Ensure "Category:" is only displayed once */}
                {note.category} {/* Render the actual category string here */}
            </p>
        </aside>
    </article>
))}
            </div>
        </div>
    );
}
