import React from "react";
import Note from "./Note/note";
const notes = (props) =>{
    const notes = props.notes.map(note=>(
        <Note handleShowEdit={props.handleShowEdit} filterByTag={props.filterByTag} handleDeleteNote={props.handleDeleteNote} note={note} key={note.id}/>
    ));
    return(
        <div className="notes container">
            {notes}
        </div>);
}
export default notes;
