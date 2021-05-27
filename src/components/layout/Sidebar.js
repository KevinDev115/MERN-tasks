import React from "react";
import ListProyects from "../proyects/List";
import NewProyect from "../proyects/NewProyect";

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERD <span>Tasks</span>
      </h1>

      <NewProyect />

      <div className="proyects">
        <h2>Your proyects</h2>
        <ListProyects />
      </div>
    </aside>
  );
};

export default SideBar;
