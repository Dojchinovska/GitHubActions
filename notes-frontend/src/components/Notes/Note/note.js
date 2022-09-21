import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose, faEdit} from "@fortawesome/free-solid-svg-icons";

const note = (props) => {
    return(
        <div className="note">
            <div className="note-header d-inline">
                {props.note.title}
                <button type="button" className="btn" onClick={()=>{props.handleDeleteNote(props.note.id)}}>
                    <FontAwesomeIcon icon={faWindowClose}/>
                </button>

            </div>
            <div className="note-content">
                {props.note.content}
            </div>
            <div className="note-footer">
                {props.note.tags.map(tag=>(
                    <span className="mr-2" key={tag.id} style={{cursor: "pointer"}} onClick={()=>{props.filterByTag(tag.id)}}>#{tag.name} </span>
                ))}
                <button type="button" className="btn" onClick={()=>{props.handleShowEdit(props.note.title, props.note.content, props.note.id)}}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
            </div>
        </div>
    );
}

export default note;
