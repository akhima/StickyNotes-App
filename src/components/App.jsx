import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });
  const [notes, setAllNotes] = useState([]);

  function handleClick(inputNote) {
    setInputNote(inputNote);
    setAllNotes(prevNotes => {
      return [...prevNotes, inputNote];
    });
  }

  function handleReload(event) {
    event.preventDefault();
  }

  function deleteNote(id) {
    setAllNotes(prevNotes => {
      return prevNotes.filter((value, index) => {
        return index !== id;
      });
    });
  }

  // function deleteNote(id) {
  //   setAllNotes(prevNotes => {
  //     return prevNotes.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div onClick={handleReload}>
      <Header />
      <CreateArea onAdd={handleClick} />
      {notes.map((singleNote, index) => (
        <Note
          key={index}
          id={index}
          title={singleNote.title}
          content={singleNote.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
