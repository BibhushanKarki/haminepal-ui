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
              <Link to="/objectives">
                <img
                  src="/img/mission/mission2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-brush-4-line"></i>
                </div>
                <div className="card-body our-objective">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    Hami Nepal is formed by individuals who prioritize humanity
                    above all and recruit volunteers accordingly.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <Link to="/objectives">
                <img
                  src="/img/mission/mission3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-calendar-check-line"></i>
                </div>
                <div className="card-body our-objective">
                  <h5 className="card-title">Our Vision</h5>
                  <p className="card-text">
                    Hami Nepal's vision is to upgrade the health facilities
                    available in every corner of Nepal as we believe basic
                    health rights should not be a luxury that the average Nepali
                    citizen cannot afford.
                  </p>
                </div>
              </Link>
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
