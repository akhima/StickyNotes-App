import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputNote, setinputNote] = useState({
    title: "",
    content: ""
  });

  function expanded() {
    setExpanded(true);
  }

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
      <form className="create-note">
        <input
          type={!isExpanded && "hidden"}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onClick={expanded}
          name="content"
          placeholder="Take a note ..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={inputNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={() => {
              props.onAdd(inputNote);
              setinputNote({
                title: "",
                content: ""
              });
            }}
            className="add-button"
          >
            <AddIcon />
          </Fab>
        </Zoom>
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
