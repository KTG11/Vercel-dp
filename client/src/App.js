import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Load saved items from localStorage or set to empty array
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [input, setInput] = useState("");

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle adding new data
  const addItem = () => {
    if (input.trim() !== "") {
      const updatedItems = [...items, input];
      setItems(updatedItems);
      setInput(""); // Clear input field
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
        <h1>Persistent Data Entry App</h1>
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

