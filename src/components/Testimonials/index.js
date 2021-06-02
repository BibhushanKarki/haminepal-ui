import React from 'react'
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


SwiperCore.use([Pagination,Autoplay]);

const Testimonials = () => {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="zoom-in">
          <div className="section-title">
            <h2>Behind The Name</h2>
            <p className="text-white">Behind The Name</p>
          </div>
          <div
            className="testimonials-slider swiper-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper"
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sadan Gurung</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    On 25 April, 2015 an earthquake with a magnitude of 7.8
                    Richter scale struck Nepal along with continued aftershocks
                    occurring throughout the nation at the intervals of 15–20
                    minutes. The earthquake affected a huge population of the
                    nation with about 9,000 fatalities and nearly 22,000 injured
                    people.All of the hospitals in Kathmandu were in chaos and
                    unmanaged with injured people flowing in rapidly. The
                    National Trauma Center, a government hospital, was no
                    exception. After hearing the Information, several youths
                    went to the trauma hospital and offered to volunteer in
                    order to control the situation. Our organization founder,
                    Mr. Sudan Gurung, was also one of them.The volunteering
                    youths started calling themselves “I to We” at that time
                    because of discrete reasons. However, the name was later
                    changed into ‘HamiNepal’, which is roughly translated as ‘We
                    for Nepal’. It is how people with helping intention came
                    along and formed the HamiNepal Youth Organization.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Rijesh Rajkarnikar</h3>
                  <h4>Co-Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Rijesh Rajkarnikar is the Co-Founder of Hami Nepal and has
                    initiated COVID-19 relief interventions. The team is working
                    extremely hard to facilitate the health sector and looks
                    forward to creating a ripple effect so that everyone,
                    especially the younger generation, contributes from a
                    personal level.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Subani</h3>
                  <h4>Co-Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Subani is also a Co-Founder of Hami Nepal who have been
                    working extremely hard to fecilitate all the needy people.In
                    respect to Subani's contribution in Enough is Enough
                    movement , Momola Palpasa Cafe has also named a smoothie
                    under her name as Subani Smoothie.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Pragya Bajracharya</h3>
                  <h4>Secretary</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Pragya Bajracharya is the joint secretary of Hami Nepal .
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    );
}

export default Testimonials
