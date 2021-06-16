import React from "react";
import {Link } from 'react-router-dom'
const OurWork = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Our Work</h2>
          <p>Check our Works</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Volunteer</li>
              <li data-filter=".filter-card">Social Work</li>
              <li data-filter=".filter-web">Awareness</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="assets/img/portfolio/portfolio-1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Equipments Donation</h4>
              <p>Social Work</p>
              <a
                href="assets/img/portfolio/portfolio-1.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Equipments Donation"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="assets/img/portfolio/portfolio-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>World Environment Day</h4>
              <p>Awareness</p>
              <a
                href="assets/img/portfolio/portfolio-2.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="World Environment Day"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="Awareness"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="/assets/img/portfolio/portfolio-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Covid Relief in Coordination with Nepal Police</h4>
              <p>Volunteer</p>
              <a
                href="/assets/img/portfolio/portfolio-3.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Covid Relief in Coordination with Nepal Police"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="/assets/img/portfolio/portfolio-4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Helping people during COVID</h4>
              <p>Social Work</p>
              <a
                href="/assets/img/portfolio/portfolio-4.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 2"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="/assets/img/portfolio/portfolio-5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Distributing Masks</h4>
              <p>Awareness</p>
              <a
                href="assets/img/portfolio/portfolio-5.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 2"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="/assets/img/portfolio/portfolio-6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                Donated about 150 hospital beds to 3 different Government
                hospitals
              </h4>
              <p>Volunteer</p>
              <a
                href="/assets/img/portfolio/portfolio-6.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <Link
                to="/work-details"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="/assets/img/portfolio/portfolio-7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Oxygen Cylinder Donation</h4>
              <p>Social Work</p>
              <a
                href="/assets/img/portfolio/portfolio-7.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 1"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="/portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="/assets/img/portfolio/portfolio-8.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Providing Ambulance to people in need</h4>
              <p>Social Work</p>
              <a
                href="/assets/img/portfolio/portfolio-8.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="/portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="/assets/img/portfolio/portfolio-9.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Donating Equipments</h4>
              <p>Social Work</p>
              <a
                href="/assets/img/portfolio/portfolio-9.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="World Environment Day"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="/portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
