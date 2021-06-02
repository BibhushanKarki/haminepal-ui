import React from "react";
import { Link } from "react-router-dom";

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
                src="assets/img/about-boxes-1.jpg"
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
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.{" "}
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
                src="assets/img/about-boxes-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-calendar-check-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="">Our Plan</Link>
                </h5>
                <p className="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.{" "}
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
              <img
                src="assets/img/about-boxes-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-movie-2-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="">Our Vision</Link>
                </h5>
                <p className="card-text">
                  The vision of Hami Nepal is to mobilize volunteers and impact
                  local communities through sustainable growth and empowering
                  its community members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
