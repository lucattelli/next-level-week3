import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/app" component={OrphanagesMap} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;