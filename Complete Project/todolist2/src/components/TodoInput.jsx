import React, { useState } from "react";
import "./todolist.css";
const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        value={inputText}
        placeholder="Enter your Todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onkeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
