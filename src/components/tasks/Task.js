import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task shadow">
      <p>{task.name}</p>
      <div className="status">
        <button
          type="button"
          className={task.status ? "complete" : "incomplete"}
        >
          {task.status ? "Complete" : "Incomplete"}
        </button>
      </div>
      <div className="actions">
        <button type="button" className="btn btn-primary">
          Editar
        </button>
        <button type="button" className="btn btn-second">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
