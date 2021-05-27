import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    passwordconfirm: "",
  });

  const { email, password, name, passwordconfirm } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <form onSubmit={onSubmit}>
          <div className="item-form">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="item-form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your E-mail"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="item-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="item-form">
            <label htmlFor="passwordconfirm">Confirm Password</label>
            <input
              type="text"
              id="passwordconfirm"
              name="passwordconfirm"
              placeholder="Repeat your password"
              value={passwordconfirm}
              onChange={onChange}
            />
          </div>

          <div className="item-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Register"
            />
          </div>
        </form>

        <Link to="/" className="link-register">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
