import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { DKeeper_backend } from "../../../declarations/DKeeper_backend"

const App = () => {
    const [notes, setNotes] = useState([])

    const addNote = newNote => {
        setNotes(prevNotes => {
            DKeeper_backend.createNote(newNote.title, newNote.content)
            return [newNote, ...prevNotes]
        })
    }

    // useEffect triggers whenever page rerenders.
    useEffect(() => {
        console.log("useEffect Triggered");
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const notes = await DKeeper_backend.readNote();
        setNotes(notes);
    }

    const renderNotes = (note, index) =>{
        const {title, content} = note
        return(
            <Note
                key = {index}
                id = {index}
                title={title}
                content={content}
                deleteNote={deleteNote}
            />
        )
    }

    const deleteNote = id => {
        DKeeper_backend.deleteNote(id);
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map(renderNotes)}
            <Footer />
        </div>
    );
}

export default App;