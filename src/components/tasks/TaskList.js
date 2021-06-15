import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Tests Task 1", status: false },
    { name: "Tests Task 2", status: true },
  ];

  return (
    <>
      <button type="button" className="btn">
        Delete proyect &times;
      </button>
      <h2>Proyect: proyecto 1</h2>
      <ul className="list-tasks">
        {tasks.length === 0 ? (
          <li className="task">
            <p>No tasks...</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>
    </>
  );
};

export default TaskList;
