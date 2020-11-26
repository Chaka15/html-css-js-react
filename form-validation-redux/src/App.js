import React, { Component } from "react";
import classes from "./App.css";
import { Route, Switch } from "react-router-dom";

import FirstForm from "./containers/FirstForm/FirstForm";
import SecondForm from "./containers/SecondForm/SecondForm";
import ThirdForm from "./containers/ThirdForm/ThirdForm";
import EndPage from "./components/EndPage/EndPage";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route
            path="/secondstep/thirdstep/endpage"
            component={EndPage}
            exact
          />
          <Route path="/secondstep/thirdstep" component={ThirdForm} exact />
          <Route path="/secondstep" component={SecondForm} exact />
          <Route path="/" component={FirstForm} exact />
          <Route
            render={() => (
              <div style={{ height: "100vh", width: "100%" }}>
                <h1>Not found</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
