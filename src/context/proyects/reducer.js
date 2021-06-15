import { SET_PROYECTS, SHOW_PROYECT_FORM } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_PROYECT_FORM:
      return {
        ...state,
        newProyect: true,
      };
    case SET_PROYECTS:
      return {
        ...state,
        proyects: action.payload,
      };
    default:
      return state;
  }
};
