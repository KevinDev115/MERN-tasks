import React, { useContext, useEffect } from "react";
import proyectContext from "../../context/proyects/context";
import Proyect from "./Proyect";

const List = () => {
  const { proyects, setProyects } = useContext(proyectContext);

  useEffect(() => {
    setProyects();
  }, []);

  return (
    <ul className="list-proyects">
      {proyects.map((d, i) => (
        <Proyect proyect={d} key={i} />
      ))}
    </ul>
  );
};

export default List;
