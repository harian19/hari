import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
