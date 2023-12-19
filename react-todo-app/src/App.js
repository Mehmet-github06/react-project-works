import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    // Sayfa yüklendiğinde çalışacak kod buraya gelecek
    const defaultItem = {
      id: new Date().getTime(),
      value: "React çalışılacak",
    };
    setItems([defaultItem]);


    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); 

  const addItem = () => {
    if (!newItem) {
      alert("Enter an Item");
      return;
    }

    const item = {
      id: new Date().getTime(),
      value: newItem,
    };
    setItems((prevItems) => [...prevItems, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value.trim())}
        className="int"
        ref={inputRef}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="list">
            {item.value} <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
