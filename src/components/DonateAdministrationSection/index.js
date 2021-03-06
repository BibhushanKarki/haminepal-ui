import React from "react";
import { Link } from "react-router-dom";
import { DonateAdministrationData as data } from "./DonateAdministrationData";

const DonateAdministrationSection = () => {
  const donateSection = {
    color: "#9F1718",
    borderBottom: "2px solid white",
  };

  const hrline = {
    borderBottom: "3px solid #9F1718",
  };

  const donateAdministrationheading = {
    fontWeight: "bold",
  };

  const ImgStyle = {
    width: "80vw",
    height: "450px",
    objectFit: "cover",
    objectPosition: "center center",
  };

  // const contentParaghaph = {
  //   marginTop: "5px",
  // };
  return (
    <div classNAme="container donate-administration-container">
      <div className="row" style={donateSection}>
        <div className="donate-adminstration-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
          <div className="col-md-3" style={hrline}>
            <h1
              className="pb-1 text-center"
              style={donateAdministrationheading}
            >
              ADMINISTRATION
            </h1>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-4">
        <div className="col-10">
          <div className="section-content-paragraph text-center">
            <p key={data.id}>{data.paragraph}</p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12 d-flex justify-content-center">
          <Link to="#" className="btn btn-primary mt-4 ">
            Donate To Motivate
          </Link>
        </div>
      </div>

      <div className="row mb-5">
        <div className="text-center ">
          <img
            src="/img/administration/administration1.jpg"
            alt="administration"
            style={ImgStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default DonateAdministrationSection;
