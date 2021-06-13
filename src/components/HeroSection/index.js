import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-up" data-aos-delay="0.5">
        <h1>Your kindness is someone’s hope.</h1>
        <h2>
          If you think you’re too small to make an impact, try going to bed with
          a mosquito.
        </h2>
        <div className="d-flex mb-2">
          <Link to="#" className="btn-get-started scrollto">
            Donate
          </Link>
          <a
            href="https://www.youtube.com/watch?v=bPny2PNWFxc"
            className="glightbox btn-watch-video"
          >
            <i className="bi bi-play-circle"></i>
            <span>Watch Video</span>
          </a>
        </div>
        <div className="d-flex donation-details">
          <button type="button" className="btn btn-lg btn-donation ">
            Collected Amount <br /> Rs.30,081,614
          </button>
          <button type="button" className="btn btn-lg btn-donation-red">
            Donated Amount <br /> Rs.12,07,000
          </button>
          <button type="button" className="btn btn-lg btn-donation ">
            Remaining Amount <br /> Rs.28,874,614
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
