import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventExtended from "./pages/EventExtended";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/events/:key" component={Events} />
      <Route path="/event/:key/:slug" component={EventExtended} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
  );
};

export default Routes;
