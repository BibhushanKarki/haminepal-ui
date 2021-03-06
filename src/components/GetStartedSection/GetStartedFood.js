import React from "react";
import { GetStarted as data } from "./GetStartedData";
// import GetStartedBtn from "./GetStartedBtn";
import Fade from "react-reveal/Fade";
import DonationFormSection from "../../components/DonationFormSection";
import "./getstarted.css";

const GetStartedFood = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center m-4 main-content">
        <Fade left>
          <div className="col-lg-6 get-started-title">
            <h1>{data.food.title}</h1>
            <h4 className="my-4" style={{ color: "gray" }}>
              {data.food.punchline}
            </h4>
            {/* <GetStartedBtn buttontitle="Get Started" /> */}
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#donateModal-cause-food`}
            >
              Get Started
            </button>
          </div>
        </Fade>
        <DonationFormSection type="cause" slug="cause-food" />
        <Fade right>
          <div className="col-md-6 text-center image-right">
            <img
              src={data.food.imgCovid}
              alt="covidimg"
              className="imageStyle"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GetStartedFood;
