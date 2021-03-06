import React from "react";
// import AppButton from "../UI/Buttons/AppButton";
import { SuccessStoriesData as data } from "./SuccessStoriesData";
import Zoom from "react-reveal/Zoom";

const SuccessStories = () => {
  return (
    <div className="behindTheNameCardContainer my-4">
      <div className="row justify-content-center mx-2">
        <h1
          className="fw-bold my-3 text-center"
          style={{ color: "#9F1718", marginLeft: "2rem",textShadow: '5px 5px 5px grey'}}
        >
          Success Stories
        </h1>
        {data.map((data, key) => {
          return (
            <div
              className="col-lg-10 col-md-10 mb-3 d-flex justify-content-center text-center"
              key={key}
            >
              <Zoom>
                <div className="card ">
                  <div className="card-body text-center">
                    <h4
                      className="card-title fw-bold text-left"
                      style={{ color: "#9F1718" }}
                    >
                      {data.storyTitle}
                    </h4>
                    <img src={data.img} alt="storyimg" style={{width:'100%'}}/>
                    <p className="card-text text-left my-4">
                      {data.storyDetail}
                    </p>
                    {/* <AppButton buttontext="Read More" /> */}
                  </div>
                </div>
              </Zoom>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessStories;
