import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventExtended from "./pages/EventExtended";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BeVolunteer from "./pages/BeVolunteer";
import VolunteerSignUp from "./pages/VolunteerSignUp";
import VolunteerProfile from "./pages/VolunteerProfile";
import Volunteer from "./pages/Volunteer/Volunteer";
import StarRating from "./pages/StarRating";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/events/:key" component={Events} />
      <Route path="/event/:key/:slug" component={EventExtended} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/be-volunteer" component={BeVolunteer} />
      <Route path="/volunteer-signup" component={VolunteerSignUp} />
      <Route path="/volunteer-profile" component={VolunteerProfile} />
      <Route path="/star-rating" component={StarRating} />
    </Switch>
  );
};

export default Routes;
