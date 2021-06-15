import React, { useReducer } from "react";
import ProyectContext from "./context";
import proyectReducer from "./reducer";

const ProyectState = (props) => {
  const initialState = {
    newProyect: false,
  };

  const [state, dispatch] = useReducer(proyectReducer, initialState);

  return (
    <ProyectContext.Provider value={{ ...state }}>
      {props.children}
    </ProyectContext.Provider>
  );
};

export default ProyectState;
