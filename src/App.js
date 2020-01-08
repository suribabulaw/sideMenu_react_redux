import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Core/Home";
import About from "./Core/About";
import NOTFOUND from "./Core/Notfound";
import Singup from './User/Singup'
import Singin from './User/Singin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/singup" exact component={Singup} />
        <Route path="/singin" exact component={Singin} />
        <Route exact component={NOTFOUND} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
