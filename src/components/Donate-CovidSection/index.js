import React from "react";
import { Donate_Covid as data } from "./DonateCovidData";
import Fade from "react-reveal/Fade";
import "./donateCovid.css";

const Covid = () => {
  return (
    <div className="container donate-covid-container">
      <div className="row d-flex flex-row align-items-center m-4 main-content ">
        <Fade left>
          <div className="col-md-6">
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
          <div className="col-md-6 text-center image-right">
            <img
              src="/img/donatedby.jpg"
              alt="donationimg"
              className="imageStyle"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Covid;
