import React from "react";
const TodoList = (props) => {
  return (
    <li className="listItem">
      {props.items}
      <span className="icons">
        <i className="fa-solid fa-trash-can icon-delete"onClick={(e=>{
            props.deleteItem(props.index)
        })}></i>
      </span>
    </li>
  );
};

export default TodoList;
