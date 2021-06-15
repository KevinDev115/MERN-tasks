import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Proyects from "./components/proyects/Proyects";
import ProyectState from "./context/proyects/state";

function App() {
  return (
    <ProyectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/proyects" component={Proyects} />
        </Switch>
      </Router>
    </ProyectState>
  );
}

export default App;
