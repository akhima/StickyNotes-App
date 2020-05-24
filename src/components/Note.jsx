import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  return (
    <div className="note">
      <span className="spanHeading">
        <h1 className="note-title">{props.title}</h1>
      </span>
      <p>{props.content}</p>

      <button
        className="delete-button"
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <DeleteIcon />
        {/* <i className="fas fa-trash" /> */}
      </button>
    </div>
  );
}

export default Note;
