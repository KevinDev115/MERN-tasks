import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

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
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="login"
            />
          </div>
        </form>

        <Link to="/register" className="link-register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
