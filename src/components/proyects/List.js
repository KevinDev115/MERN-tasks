import React from "react";
import Proyect from "./Proyect";

const List = () => {
  const data = [
    { name: "Proyect 1" },
    { name: "Proyect 2" },
    { name: "Proyect 3" },
  ];

  return (
    <ul className="list-proyects">
      {data.map((d) => (
        <Proyect proyect={d} />
      ))}
    </ul>
  );
};

export default List;
