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
                Our Mission
              </h1>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <p>
                {" "}
                Hami Nepal is formed by individuals who prioritize humanity
                above all and recruit volunteers accordingly. So far our entire
                team has been working as an emergency response team; to date,
                Hami Nepal has specialized in crisis management and disaster
                relief. As per the expertise that we have gained, our priorities
                are to work for the betterment of the health sector of Nepal,
                besides this Hami Nepal at the core will always be an emergency
                response at the same time. <br />
                Our vision as a team is to spread our services throughout Nepal
                for which we are expanding our chapters outside of Kathmandu
                which shall be governed by the central board itself.
              </p>
              <p>
                The organisation is currently working solely in the field
                COVID-19 in order to provide medical relief to individuals as
                well as medical institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row" style={objectivesSection}>
          <div className="our-objectives-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-3" style={hrline}>
              <h1 className="pb-1 text-center" style={OurObjectivesheading}>
                Our Vision
              </h1>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <p>
                Hami Nepal's vision is to upgrade the health facilities
                available in every corner of Nepal as we believe basic health
                rights should not be a luxury that the average Nepali citizen
                cannot afford and mobilize volunteers and impact local
                communities through sustainable growth and empowering its
                community members. Our future projects and plan will be in this
                periphery and not only limiting our organization to this but
                Hami Nepal will also continue to work in every area of
                injustice.
              </p>
            </div>
          </div>
        </div>
      </div>

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
              <ul style={{ listStyle: "none" }} className="objective-list">
                <li>
                  Transparency in funds collection and distribution through the
                  real-time update system.{" "}
                </li>
                <li>The global platform for volunteer participation.</li>
                <li>
                  Empowering and Impacting people in need through social
                  welfare.{" "}
                </li>
                <li>Humanitarian Action and long-term development programs.</li>
                <li>
                  Zero Administrative cost, i.e., 100 % fund allocation to the
                  people in need.
                </li>
                <li>
                  Efficient allocation of funds, volunteers, and resources.
                </li>
                <li>Mobilization of Aid workers and response team.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurObjectiveSection;
