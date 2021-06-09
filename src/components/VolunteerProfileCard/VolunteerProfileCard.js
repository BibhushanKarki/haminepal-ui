import React from "react";
import { Link } from "react-router-dom";
import AppButton from "../UI/Buttons/AppButton";
import { VolunteerProfileData as data } from "./VolunteerProfileData";
import Zoom from "react-reveal/Zoom";
import "./volunteer-profile.css";

const VolunteerProfileCard = () => {
  const cardStyle = {
    width: "350px",
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 volunteer-profile-heading">
            <h2 className="heading-volunteer">Our Volunteer's Profile</h2>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          {data.map((data,key)=>{
            return ( 
              <div className="col-lg-12 mb-3 " key={key}>
              <Zoom>
                <div className="card volunteer-card mt-4 w-100" style={cardStyle}>
                  <Link
                    to="/volunteer-profile"
                    style={{ textAlign: "center", color: "black" }}
                  >
                    <img
                      src={data.profilePic}
                      className="my-3 profile-style"
                      alt="pp"
                    />

                    <div className="card-body text-center">
                      <h6 className="card-title fw-bold">{data.profileName}</h6>
                      <p className="card-text">{data.userMsg}</p>
                    </div>
                  </Link>
                  <div
                    className="card-footer text-center "
                    style={{
                      backgroundColor: "#f5f5f500",
                      borderTop: "1px solid #f9fafb",
                      marginBottom: "20px",
                    }}
                  >
                    <AppButton buttontext="Donate to motivate" />
                  </div>
                </div>
              </Zoom>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfileCard;
