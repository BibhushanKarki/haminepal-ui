import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">
              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="125"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy People</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="85"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-clock"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="35"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Years of experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="48"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 video-box align-self-baseline"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/* <img src="/img/mission/about.jpg" className="img-fluid" alt="" /> */}
            <YoutubeEmbed embedId="bPny2PNWFxc" />
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>
              Hami Nepal Youth Organisation is a non-profit organisation,
              established in 2015 A.D. and registered in 2020 A.D. (Regd.no.
              609789065), which directly connects the donors and the recipients.
            </h3>
            {/* <p className="fst-italic">
              Hami Nepal Youth Organisation is a non-profit organisation,
              established in 2015 A.D. and registered in 2020 A.D. (Regd.no.
              609789065), which directly connects the donors and the recipients.
            </p> */}
            <ul>
              <li>
                <i className="bx bx-check-double"></i> Hami Nepal has a track
                record of producing tangible and effective assistance during the
                public crisis in Nepal through volunteer work and donations; our
                efforts and assistance were widely lauded during the crisis
                arising in the aftermath of the earthquake in 2015. On 25 April,
                2015 an earthquake with a magnitude of 7.8 Richter scale struck
                Nepal along with continued aftershocks occurring throughout the
                nation at the intervals of 15–20 minutes. The earthquake
                affected a huge population of the nation with about 9,000
                fatalities and nearly 22,000 injured people.
              </li>
              {/* <li><i className="bx bx-check-double"></i>Now, the coronavirus pandemic has affected every nation in the world - some more than others. The COVID-19 cases have surged in Nepal to such an extent that the healthcare system of the nation is failing. The situation is dire with inadequate bed capacity, critical oxygen and medical supply shortages ultimately leading to personal loss of close-ones.</li> */}
              {/* <li><i className="bx bx-check-double"></i> Amid this humanitarian crisis, Hami Nepal members and volunteers worked tirelessly to set up the COVID ward in Bir Hospital and National Trauma Center. In order to further ramp up health infrastructure, we have converted unused government spaces into COVID facilities and provided support to 3 different government hospitals. Hami Nepal has successfully set up 170 beds in Bir Hospital and donated 50 beds to the new building of Bir Hospital. The team has also donated high function ICU beds, portable X-ray machines among other medical supplies and equipment using the collected donations.</li> */}
              <li>
                <i className="bx bx-check-double"></i> Our team recently
                received 520 oxygen cylinders from our donor Shankar group and
                Infinity holdings. We are also working our way to receive a
                portable high tech medical oxygen plant from the same donor. We
                have also deployed 100 beds and mattresses, 270 oxygen cylinders
                out of 520 and medical supplies to the Sudurpaschim Province of
                Nepal and other places. Our donors provided us with 50,000 N95
                Masks, 200 sets of PPE, 100 beds and other supplies which were
                then sent as aid to Sudurpaschim Province.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
