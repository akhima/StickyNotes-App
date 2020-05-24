import React from "react";

function Note(props) {
  return (
    <div className="note">
      <span className="spanHeading">
        <h1>{props.title}</h1>
      </span>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}

export default Note;
