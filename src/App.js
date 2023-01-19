import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
    };
    console.log(items);
    setItems((Oldlist) => [item, ...Oldlist]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const array = items.filter((item) => item.id !== id);
    setItems(array);
  };
  return (
    <>
      <div className="mainContent">
        <h1>TODO-APPLICATION</h1>
        <div className="input">
          <input
            placeholder="Things to do ?"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
        <div className="output">
          {items.map((item) => {
            return (
              <li>
                {item.value}
                <button onClick={() => deleteItem(item.id)}>X</button>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
