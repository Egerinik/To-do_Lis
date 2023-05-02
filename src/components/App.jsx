import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  function handleText(event) {
    setText(event.target.value);
  }

  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={text} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
