import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

const Proyects = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-primary">
        <Header />
        <main>
          <div className="container-task"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
