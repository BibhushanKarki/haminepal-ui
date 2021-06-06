import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Events from "./pages/Events/Events";
import EventExtended from "./pages/EventExtended";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BeVolunteer from "./pages/BeVolunteer";
import VolunteerSignUp from "./pages/VolunteerSignUp";
import VolunteerProfile from "./pages/VolunteerProfile";
import Volunteer from "./pages/Volunteer/Volunteer";
import StarRating from "./pages/StarRating";
// import ContactUs from "./pages/ContactUs/ContactUs";
import Contact from "./components/Contact";
import Fundraiser from "./pages/Fundraiser/Fundraiser";
import Transparency from "./pages/Transparency/Transparency";
import TransparencyDetail from "./pages/TransparencyDetail/TransparencyDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Covid from "./pages/Covid/Covid";
import Food from "./pages/Food/Food";
import Health from "./pages/Health/Health";
import Education from "./pages/Education/Education";
import Clothing from "./pages/Clothing/Clothing";
import Housing from "./pages/Housing/Housing";
import Donate_Covid from "./pages/Donate-Covid";
import Cause from "./pages/Cause/Cause";
import DonateAdministration from "./pages/DonateAdministration";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/events/:key" component={Events} />
      <Route path="/event/:key/:slug" component={EventExtended} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/be-volunteer" component={BeVolunteer} />
      <Route path="/volunteer-signup" component={VolunteerSignUp} />
      <Route path="/volunteer-profile" component={VolunteerProfile} />
      <Route path="/star-rating" component={StarRating} />
      <Route path="/contact" component={Contact} />
      <Route path="/fundraisers" component={Fundraiser} />
      <Route path="/transparencydetail" component={TransparencyDetail} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/covid" component={Covid} />
      <Route path="/food" component={Food} />
      <Route path="/health" component={Health} />
      <Route path="/education" component={Education} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/housing" component={Housing} />
      <Route path="/donate-covid" component={Donate_Covid} />
      <Route path="/cause" component={Cause} />
      <Route path="/transparency" component={Transparency} />
      <Route path="/donate-administration" component={DonateAdministration} />
    </Switch>
  );
};

export default Routes;
