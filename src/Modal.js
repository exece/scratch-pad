import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

import Note from "./Note";

const isEmpty = (value) => value.trim() === "";

const Modal = () => {
  //const [formInputsValidity, setFormInputsValidity] = useState(true);
  const [notes, setNotes] = useState([]);
  const noteInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (isEmpty(noteInputRef.current.value)) {
      return;
    }
    const unique_id = uuid();
    const note = {
      id: unique_id,
      text: noteInputRef.current.value,
    };

    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
    noteInputRef.current.value = "";
  };

  return (
    <div className="modal">
      <h1>Scratch-Pad</h1>
      <form className="note-form" onSubmit={submitHandler}>
        <input
          className="input form-item"
          type="text"
          id="note"
          ref={noteInputRef}
        ></input>
        <button className="btn form-item">Take Note</button>
      </form>
      <div className="content">
        {notes.map((note) => (
          <Note key={note.id} text={note.text} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
