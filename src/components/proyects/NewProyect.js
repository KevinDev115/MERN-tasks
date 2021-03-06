import React, { useContext, useState } from "react";
import proyectContext from "../../context/proyects/context";

const NewProyect = () => {
  const { newProyect, showProyectForm } = useContext(proyectContext);

  const [proyect, setProyect] = useState({ name: "" });

  const { name } = proyect;

  const onChange = (e) => {
    setProyect({
      ...proyect,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={showProyectForm}
      >
        New Proyect
      </button>
      {newProyect && (
        <form className="form-new-proyect" onSubmit={onFinish}>
          <input
            type="text"
            className="input-text"
            placeholder="Name proyect"
            name="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="submit"
            value="create"
            className="btn btn-block btn-primary"
          />
        </form>
      )}
    </>
  );
};

export default NewProyect;
