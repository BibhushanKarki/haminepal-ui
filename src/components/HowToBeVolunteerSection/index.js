import React from "react";
import VolunteerModal from "../VolunteerModal";

const BeVolunteerSection = () => {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-md-12">
            <div className="volunteer-title">
              <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
                How to be Volunteer?
              </h2>
              <p>
                First of all, Volunteers need to sign up with the following
                requirements.
              </p>

              <ul type="square">
                <li>Name</li>
                <li>Level of Expertise</li>
                <li> Qualification</li>
                <li>Availability of Transportation </li>
                <li>Contact Number</li>
                <li>Geo Locations</li>
              </ul>

              <p>
                Once the users fill up the following requirements the data
                filled by the users will be send to executive team of
                HamiNepal.org for verification, the expertise checks overall
                data filled by the users and if found authentic the confirmation
                for being Volunteer must be sent to Volunteers Mobile Number and
                once the user accepts him/her as a volunteer the Geo location
                will be tracked for the further emergency call out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="volunteer-title">
              <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
                Seeking a Volunteer:
              </h2>
              <p>
                If a volunteer is required for Traffic Chowk, Biratnagar area
                then all the volunteers who have registered will be tracked near
                traffic chowk and notifications must be sent to nearby
                volunteers for emergency call out. The nearby volunteers who are
                seeking to help must accept the notifications, if they click on
                accept button the accept notifications will be then sent to the
                Executive Team of HamiNepal.org where the team will receive
                volunteers' mobile number.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12"></div>
          <div className="volunteer-during-covid19">
            <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
              Volunteering during COVID-19
            </h2>
            <p>
              Our expert security and medical teams are continually reviewing
              our ability to implement projects safely during the COVID-19
              pandemic. Their expertise and any relevant national government are
              guiding our decisions regarding all travel, both internally.
            </p>
            <p>
              We will continue to follow the advice of the World Health
              Organisation (WHO) and national governments to protect the
              wellbeing and safety of all volunteers, employees, and the people
              we work with.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12"></div>
          <div className="safety-measures">
            <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
              Safety measures for staff and volunteers
            </h2>
            <ul type="square">
              <li>
                locally-relevant protective and preventative guidance relating
                to health risks, including the risks associated with COVID-19,
              </li>
              <li>access to a dedicated medical team by phone and email,</li>
              <li> a full medical briefing during the onboarding process.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row ">
          <div className="col-md-12 text-center">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#volunteerModal"
            >
              Be A Volunteer
            </button>
          </div>
        </div>
      </div>
      <VolunteerModal />
    </>
  );
};

export default BeVolunteerSection;
