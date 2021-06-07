import React from "react";

const OurObjectiveSection = () => {
  const objectivesSection = {
    color: "#9F1718",
    borderBottom: "2px solid white",
  };

  const hrline = {
    borderBottom: "3px solid #9F1718",
  };

  const OurObjectivesheading = {
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row" style={objectivesSection}>
          <div className="our-objectives-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-3" style={hrline}>
              <h1 className="pb-1 text-center" style={OurObjectivesheading}>
                Our Objectives
              </h1>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h4>
                The vision of Hami Nepal is to mobilize volunteers and impact
                local communities through sustainable growth and empowering its
                community members.
              </h4>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <p>
                Transparency in funds collection and distribution through the
                real-time update system.{" "}
              </p>
              <p>The global platform for volunteer participation.</p>
              <p>
                Empowering and Impacting people in need through social welfare.{" "}
              </p>
              <p>Humanitarian Action and long-term development programs.</p>
              <p>
                Zero Administrative cost, i.e., 100 % fund allocation to the
                people in need.
              </p>
              <p>Efficient allocation of funds, volunteers, and resources.</p>
              <p>Mobilization of Aid workers and response team.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurObjectiveSection;
