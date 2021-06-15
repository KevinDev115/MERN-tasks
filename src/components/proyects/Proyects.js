import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Proyects = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-primary">
        <Header />
        <main>
          <TaskForm />
          <div className="container-task">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
