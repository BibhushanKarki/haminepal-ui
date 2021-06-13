import React from "react";
import { GetStarted as data } from "./GetStartedData";
// import GetStartedBtn from "./GetStartedBtn";
import Fade from "react-reveal/Fade";
import "./getstarted.css";

const GetStartedEducation = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center m-4 main-content">
        <Fade left>
          <div className="col-lg-6 get-started-title text-start">
            <h1>{data.education.title}</h1>
            <h4 className="my-4" style={{ color: "gray" }}>
              {data.education.punchline}
            </h4>
            {/* <GetStartedBtn buttontitle="Get Started" /> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-6 text-center image-right">
            <img
              src={data.education.imgCovid}
              alt="covidimg"
              className="imageStyle"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GetStartedEducation;
