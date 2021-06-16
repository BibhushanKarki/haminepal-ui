import React from "react";
import SwiperCore, { Pagination ,Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation]);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials mb-4">
      <div className="container" data-aos="zoom-in">
        <div className="section-title text-center">
          <h2>Behind The Name</h2>
          <p className="text-white">Behind The Name</p>
        </div>
        <div
          className="testimonials-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="/assets/img/behind-the-name/behind-the-name-1.png"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sudan Gurung</h3>
                <h4>President</h4>
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
                <div className="social-links mt-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/groups/769317927136629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="/assets/img/behind-the-name/behind-the-name-2.jpg"
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
                <div className="social-links mt-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/groups/769317927136629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="/assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Subani</h3>
                <h4>Co-Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Subani is also a Co-Founder of Hami Nepal who have been
                  working extremely hard to facilitate all the needy people.In
                  respect to Subani's contribution in Enough is Enough movement
                  , Momola Palpasa Cafe has also named a smoothie under her name
                  as Subani Smoothie.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/groups/769317927136629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide> */}

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="/assets/img/behind-the-name/behind-the-name-5.png"
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
                <div className="social-links mt-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/groups/769317927136629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img
                  src="/assets/img/behind-the-name/behind-the-name-6.png"
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
                <div className="social-links mt-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/groups/769317927136629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
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
