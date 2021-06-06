import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Hami Nepal</h3>
                <p>
                  Ranibari-27 <br />
                  Samakhusi Kathmandu
                  <br />
                  <br />
                  <strong>Phone:</strong> +977-9808543667, +977-9845628191
                  <br />
                  <strong>Email:</strong> info@haminepal.org
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/groups/769317927136629" target="_blank" rel="noopener noreferrer" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://www.skype.com/en/" target="_blank" rel="noopener noreferrer" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/fundraisers">Fundraisers</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/volunteer">Volunteers</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/aboutus">About HamiNepal</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Other Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Any Link</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Any Link</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Any Link</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Any Link</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Any Link</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Join now and receive emails about the upcoming events!</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Hami Nepal</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hashtechnologies.net/"
          >
            Hash Technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
