import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
<Router>
  <div>
    <Nav />
    <Switch>
    <Route exact path="/" component={Books} />
    <Route exact path="/Books" component={Books} />
    <Route exact path="/Detail" component={Detail} />
    <Route exact path="/NoMatch" component={NoMatch} />
  </Switch>
  </div>
</Router>
export default App;
