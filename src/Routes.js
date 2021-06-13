import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Projects from "./pages/Projects/Projects";
import ProjectExtended from "./pages/ProjectExtended";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BeVolunteer from "./pages/HowToBeVolunteer";
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
import Faq from "./pages/Faq";
import Donate_Covid from "./pages/Donate-Covid";
import Cause from "./pages/Cause/Cause";
import DonateAdministration from "./pages/DonateAdministration";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import OurCommunity from "./pages/OurCommunity/OurCommunity";
import WhyHamiNepal from "./pages/WhyHamiNepal/WhyHamiNepal";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import OurObjective from "./pages/OurObjective";
import DonationErrorPage from "./pages/DonationErrorPage";
import DonationSuccessPage from "./pages/DonationSuccessPage";

import ProtectedRoute from "./utils/ProtectedRoute";

const Routes = () => {
  const donationIsSet = JSON.parse(localStorage.getItem("donation"))
    ? true
    : false;
  console.log(
    donationIsSet,
    "donation is set",
    JSON.parse(localStorage.getItem("donation"))
  );

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/events/:key" component={Projects} />
      <Route path="/event/:key/:slug" component={ProjectExtended} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/how-to-be-a-volunteer" component={BeVolunteer} />
      <Route path="/volunteer-signup" component={VolunteerSignUp} />
      <Route path="/volunteer-profile" component={VolunteerProfile} />
      <Route path="/star-rating" component={StarRating} />
      <Route path="/community" component={OurCommunity} />
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
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/whyhaminepal" component={WhyHamiNepal} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/our-objectives" component={OurObjective} />
      <ProtectedRoute
        path="/donation/success"
        component={DonationSuccessPage}
        condition={donationIsSet}
      />
      <ProtectedRoute
        path="/donation/error"
        component={DonationErrorPage}
        condition={donationIsSet}
      />
      <Route path="/faq" component={Faq} />
    </Switch>
  );
};

export default Routes;
