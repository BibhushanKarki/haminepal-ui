import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination, Autoplay]);

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
                  unmanaged with injured people flowing in rapidly. The National
                  Trauma Center, a government hospital, was no exception. After
                  hearing the Information, several youths went to the trauma
                  hospital and offered to volunteer in order to control the
                  situation. Our organization founder, Mr. Sudan Gurung, was
                  also one of them.The volunteering youths started calling
                  themselves “I to We” at that time because of discrete reasons.
                  However, the name was later changed into ‘HamiNepal’, which is
                  roughly translated as ‘We for Nepal’. It is how people with
                  helping intention came along and formed the HamiNepal Youth
                  Organization.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/41353137_1978665292156713_1139432816216375296_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=wu9mQ-mC1sIAX95D_lK&_nc_ht=scontent.fktm10-1.fna&oh=c654ae861dde767b84d0a6e20c813009&oe=60DDA408"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Rijesh Rajkarnikar</h3>
                <h4>Co-Treasurer Elect</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Rijesh Rajkarnikar defines himself with the statement as a
                  young individual who believes that determination, versatility
                  and excellent group dynamics as the major components of
                  achieving set targets. For the past 5 years, he has worked in
                  various capacities and contributed in various fields with
                  various organizations and enterprises in areas such as youth
                  empowerment, community development, gender equality, social
                  entrepreneurship, resilience, marketing, branding, operations
                  management, disaster relief and crisis management and so on.
                  An ambivert who is always eager to start up a conversation
                  with new people and adapts to the provided surrounding in a
                  short period of time. Rijesh has recently joined as an active
                  member of Hami Nepal for Covid Crisis Management working on
                  the field to closely understand and strategize for mitigating
                  the problems to be faced by the Nation in the coming days. He
                  has been responsible for planning and implementing many of the
                  relief efforts being operated by Hami Nepal in recent days.
                  His efforts has also been recognized by the UN volunteers
                  Nepal. He states "The team is working extremely hard to
                  facilitate the health sector and looks forward to creating a
                  ripple effect so that everyone, especially the younger
                  generation, contributes from a personal level." Rijesh was
                  also recently elected as the Co-Treasurer of Hami Nepal by the
                  board.
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
                  respect to Subani's contribution in Enough is Enough movement
                  , Momola Palpasa Cafe has also named a smoothie under her name
                  as Subani Smoothie.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/122786014_1226786601021737_7408835113369957252_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=YmDeCZ6QwBkAX8U99mK&tn=ODvmJ3lG2eZfHnBa&_nc_ht=scontent.fktm10-1.fna&oh=adf50a187968e0eadf94408d524f2108&oe=60DF27CF"
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
                  src="assets/img/behind-the-name/bidhan-behind-the-name.png"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Bidhan Shrestha</h3>
                <h4>Project Lead Elect</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Bidhan Shrestha is recognized by MTV Roadies as a Roadie Real
                  Hero and was the finalist of MTV Roadies 2019. He had been
                  closely observing and supporting the work done by Hami Nepal
                  since the 1st wave of COVID by spreading awareness through his
                  social media platform which has a wide reach among the youths
                  of Nepal. Summoned by Hami Nepal, Bidhan Shrestha has joined
                  the COVID crisis management project as a front-line volunteer
                  working tirelessly onfield day and night. Bidhan has displayed
                  his heroics working around the clock to manage the 2nd wave of
                  COVID faced by the nation. Also at the same time, he has been
                  documenting everything to make sure positive inspiration and a
                  sense of hope could spread throughout his social media handles
                  in such hard times. Bidhan has also been elected as a Project
                  Lead of Hami Nepal by the board members.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="assets/img/behind-the-name/rupak-behind-the-name.png"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Dr. Rupak B. Ghimire</h3>
                {/* <h4>Project Lead Elect</h4> */}
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Dr. Rupak B. Ghimire is our young and enthusiastic
                  dermatologist and hair transplant surgeon. He completed his
                  MBBS, MD from Kathmandu University and training in basic hair
                  transplant surgery from Satyam Hair Transplants, India and
                  International Fellowship in Hair Transplant Surgery from Dana
                  Plastic Surgery Clinic, South Korea. He was also an Assistant
                  Professor at Kathmandu Medical College, Sinamangal. He has
                  received training and attended various national and
                  international conferences, and recieved many awards and
                  recognitions- International Scholarship at American Academy of
                  Dermatologists (AAD) ,WCD Scholarship Grant at World Congress
                  of Dermatology in Milan, Italy , Health Category Winner of
                  Ncell App Camp 2015 and many more awards and presentations to
                  his credit. He has been a winner of Mr Nepal 2011, acted in a
                  movie as a lead actor and many TV commercials as well. He has
                  the first published paper in hair transplantation in Journal
                  of Nepal Medical Association and reviewer for many
                  international journals like Dermatologics Therapy, Balkans
                  Medical Journal, Asian Journal of Research in Dermatological
                  Science and more. He has been very active conducting health
                  camps, social activism and connecting to youths.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
