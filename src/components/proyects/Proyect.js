import React from "react";

const Proyect = ({ proyect }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {proyect.name}
      </button>
    </li>
  );
};

export default Proyect;
