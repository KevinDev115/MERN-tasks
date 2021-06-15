import React, { useReducer } from "react";
import ProyectContext from "./context";
import proyectReducer from "./reducer";

import { SET_PROYECTS, SHOW_PROYECT_FORM } from "../../types";

const proyects = [
  { id: 1, name: "Proyect 1" },
  { id: 2, name: "Proyect 2" },
  { id: 3, name: "Proyect 3" },
];

const ProyectState = (props) => {
  const initialState = {
    newProyect: false,
    proyects: [],
  };

  const [state, dispatch] = useReducer(proyectReducer, initialState);

  const showProyectForm = () => {
    dispatch({
      type: SHOW_PROYECT_FORM,
    });
  };

  const setProyects = () => {
    dispatch({
      type: SET_PROYECTS,
      payload: proyects,
    });
  };

  return (
    <ProyectContext.Provider value={{ ...state, showProyectForm, setProyects }}>
      {props.children}
    </ProyectContext.Provider>
  );
};

export default ProyectState;
