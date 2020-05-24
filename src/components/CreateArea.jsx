import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setinputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setinputNote(prevNote => {
      if (name === "title") {
        return {
          title: value,
          content: prevNote.content
        };
      } else if (name === "content") {
        return {
          title: prevNote.title,
          content: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note ..."
          rows="3"
          onChange={handleChange}
          value={inputNote.content}
        />
        <button
          onClick={() => {
            props.onAdd(inputNote);
            setinputNote({
              title: "",
              content: ""
            });
          }}
          className="add-button"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

//Title only
// function CreateArea(props) {
//   const [inputTitle, setinputTitle] = useState("");

//   function handleChange(event) {
//     const newTitle = event.target.value;
//     setinputTitle(newTitle);
//   }

//   return (
//     <div>
//       <form>
//         <input
//           onChange={handleChange}
//           name="title"
//           placeholder="Title"
//         // value={title}
//         />
//         <textarea name="content" placeholder="Take a note ..." rows="3" />
//         <button
//           onClick={() => {
//             props.onAdd(inputTitle);
//             setinputTitle("");
//           }}
//           className="add-button"
//         >
//           +
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
