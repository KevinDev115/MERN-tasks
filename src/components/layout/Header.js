import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <p className="name-user">
        Hola <span>Kevin Galindo</span>
      </p>

      <nav className="nav-primary">
        <a href="#!">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
