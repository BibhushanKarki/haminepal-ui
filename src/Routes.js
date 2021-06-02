import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventExtended from "./pages/EventExtended";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/events/:key" component={Events} />
      <Route path="/event/:key/:slug" component={EventExtended} />
    </Switch>
  );
};

export default Routes;
