import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-up" data-aos-delay="0.5">
        <h1>It is not enough to be compassionate. You must act.</h1>
        <h2>
        Alone we can do so little, together we can do so much.
          
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
          <button type="button" className="btn btn-lg btn-donation px-5">
            <b>Funds Raised</b><br /> Rs.30,081.00
          </button>
          <button type="button" className="btn btn-lg btn-donation-red px-5">
            <b>Funds Spent </b><br /> Rs.12,07.00
          </button>
          <button type="button" className="btn btn-lg btn-donation px-5 ">
            <b>Remaining Funds </b><br /> Rs.28,874.00
          </button>
        </div>
 
        {/* <div class="col-xl-6 col-md-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body cleartfix">
               <div class="media align-items-stretch">
                  <div class="align-self-center">
                     <h4 class="mr-2" style={{color:'black'}}>Rs.36,000.00</h4>
                  </div>
                <div class="media-body">
                <h4>Fund Raised</h4>
                <span>Monthly Cost</span>
                </div>
              
               </div>
               </div>
              </div>
            </div>
          </div> */}
        
        </div>
    </section>
  );
};

export default Hero;
