import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className='todo-footer'>
      <p data-testid='p-1'>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to='/followers'>Followers</Link>
    </div>
  );
}

export default TodoFooter;
