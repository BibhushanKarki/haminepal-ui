import React from "react";
import { Link } from "react-router-dom";
import DonationFormSection from "../../components/DonationFormSection";
import YoutubeEmbed from "./YoutubeHome";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-up" data-aos-delay="0.5">
        <h1 className="mb-4">Your kindness is someone’s hope.</h1>
        {/* <h2>
          If you think you’re too small to make an impact, try going to bed with
          a mosquito.
        </h2> */}
        <div className="d-flex">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#donateModal-admin-donate`}
          >
            Donate
          </button>
          <a
            href="#"
            className="glightbox btn-watch-video"
            data-bs-toggle="modal"
            data-bs-target="#youtube"
          >
            <i className="bi bi-play-circle"></i>
            <span>Watch Video</span>
          </a>
        </div>
        {/* <div className="d-flex donation-details">
          <button type="button" className="btn btn-lg btn-donation ">
             Amount Collected<br /> Rs.30,081,614
          </button>
          <button type="button" className="btn btn-lg btn-donation-red">
            Amount Utilized <br /> Rs.12,07,000
          </button>
          <button type="button" className="btn btn-lg btn-donation ">
             Amount Remaining<br /> Rs.28,874,614
          </button>
        </div> */}
      </div>
      <DonationFormSection type="admin" slug="admin-donate" />
      {/* <!-- Modal --> */}
      <div
        class="modal fade "
        id="youtube"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <YoutubeEmbed embedId="bPny2PNWFxc" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
