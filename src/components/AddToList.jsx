import { useState } from "react";
import "./AddToList.css";

export const AddToList = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addItem = (e) => {
    if (e.key === "Enter")
      setList((prev) => [...prev, { id: prev.length + 1, item: inputText }]);
    else if (e.type === "click")
      setList((prev) => [...prev, { id: prev.length + 1, item: inputText }]);
  };

  const removeItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="card">
      <h1>Add Items to List</h1>
      <div className="input">
        <input
          type="text"
          name="item"
          placeholder="Type something and press Enter"
          value={inputText}
          onChange={handleChange}
          onKeyDown={addItem}
        />
        <button onClick={addItem}>Add</button>
      </div>
      {list.length ? (
        <>
          {list.map((item) => {
            return (
              <div key={item.id} className="output">
                {item.item}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <p>No items yet. Add your first one!</p>
      )}
    </div>
  );
};
