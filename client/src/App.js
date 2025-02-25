import React, { useState } from "react";
import "./App.css";

function App() {
  // State to hold input data and a list of items
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle adding new data
  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput(""); // Clear input field after adding
    }
  };

  // Handle key press (detects Enter key)
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Entry App</h1>
        {/* Input field to take in data */}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Listen for Enter key press
          placeholder="Enter data..."
        />
        <button onClick={addItem}>Add</button>

        {/* Display list of entered data */}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
