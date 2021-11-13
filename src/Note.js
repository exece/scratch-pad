import React from 'react'
import "./App.css";

const Note = (props) => {
    return (
        <div className="note-card">
            {props.text}
        </div>
    )
}

export default Note
