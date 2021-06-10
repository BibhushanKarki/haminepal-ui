import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Mission = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <img
                src="/img/mission/mission2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-brush-4-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="">Our Mission</Link>
                </h5>
                <p className="card-text">
                  Hami Nepal is formed by individuals who prioritize humanity
                  above all and recruit volunteers accordingly. So far our
                  entire team has been working as an emergency response team; to
                  date, Hami Nepal has specialized in crisis management and
                  disaster relief. As per the expertise that we have gained, our
                  priorities are to work for the betterment of the health sector
                  of Nepal, besides this Hami Nepal at the core will always be
                  an emergency response at the same time. Our vision as a team
                  is to spread our services throughout Nepal for which we are
                  expanding our chapters outside of Kathmandu which shall be
                  governed by the central board itself.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <img
                src="/img/mission/mission3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-calendar-check-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="">Our Vision</Link>
                </h5>
                <p className="card-text">
                  Hami Nepal's vision is to upgrade the health facilities
                  available in every corner of Nepal as we believe basic health
                  rights should not be a luxury that the average Nepali citizen
                  cannot afford. Our future projects and plan will be in this
                  periphery and not only limiting our organization to this but
                  Hami Nepal will also continue to work in every area of
                  injustice.
                  {/* The vision of Hami Nepal is to mobilize volunteers
                  and impact local communities through sustainable growth and
                  empowering its community members. */}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <Link to="/objectives">
                <img
                  src="/img/mission/mission1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-movie-2-line"></i>
                </div>
                <div className="card-body our-objective">
                  <h5 className="card-title ">Our Objectives</h5>
                  <p className="card-text">
                    Our main objective is to help anyone in need without any
                    hesitations and expectation of payback.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
