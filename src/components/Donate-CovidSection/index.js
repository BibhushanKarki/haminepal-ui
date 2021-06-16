import React from "react";
import { Donate_Covid as data } from "./DonateCovidData";
import Fade from "react-reveal/Fade";
import DonationFormSection from "../../components/DonationFormSection";

import "./donateCovid.css";

const Covid = () => {
  return (
    <div className="container donate-covid-container ">
      <div className="row d-flex flex-row align-items-center m-4 main-content ">
        <h2 style={{ color: "#9F1718" }}>COVID-19</h2>
        <Fade left>
          <div className="col-lg-6 col-md-12">
            <div className="section-content-paragraph">
              {data.map((data) => {
                return (
                  <p className="description-section" key={data.id}>
                    {data.description}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-lg-6 col-md-12 text-center image-right">
            <img
              src="/img/donatedby.jpg"
              alt="donationimg"
              className="imageStyle"
            />
          </div>
        </Fade>
        <button
          className="btn btn-primary col-lg-4"
          data-bs-toggle="modal"
          data-bs-target={`#donateModal-covid19`}
        >
          Donate Now
        </button>
      </div>
      <DonationFormSection type="donate" slug="covid19" />
    </div>
  );
};

export default Covid;
