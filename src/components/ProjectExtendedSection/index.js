import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./project-extended.css";
import { ProjectExtendedSectionData as items } from "./ProjectExtendedSectionData";
import { ProjectSectionData } from "../../components/ProjectPageSection/ProjectSectionData";
import DonationFormSection from "../DonationFormSection";
import { Helmet } from "react-helmet";

const ProjectExtendedSection = () => {
  const [inputValue, setInputValue] = useState("");
  const { key, slug } = useParams();

  const currentKeyBundle = ProjectSectionData.filter(
    (keyBundle) => keyBundle.key === key
  )[0];

  let currentProject;

  if (currentKeyBundle) {
    currentProject = currentKeyBundle.data.filter(
      (project) => project.slug === slug
    )[0];
  }

  return currentProject ? (
    <>
      <Helmet>
        <title>{currentProject.title} - HamiNepal</title>
        <meta
          property="og:url"
          content={`http://haminepal.org/event/${key}/${currentProject.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={currentProject.title} />
        <meta
          property="og:description"
          content={`${currentProject.paragraph.substr(0, 100)}...`}
        />
        <meta
          property="og:image"
          content={`http://haminepal.org/${currentProject.image}
        `}
        />
      </Helmet>
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div
              className="card"
              style={{
                border: "none",
                boxShadow: "#f8f8f8 1px 1px 10px 0px",
                backgroundColor: "#ffffff61",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ fontWeight: "bold", fontSize: 25 }}
                >
                  {currentProject.title}
                </h5>
              </div>
              <img
                className="card-img-top image-container"
                src={currentProject.image}
                alt={currentProject.title}
                style={{ height: 300 }}
              />
              <div
                className="mt-3 "
                dangerouslySetInnerHTML={{
                  __html: currentProject.paragraph,
                }}
              ></div>
              <hr />
              <div className="text-center mb-5">
                <Link to="/volunteer-signup" className="btn btn-danger mt-4 ">
                  Volunteer
                </Link>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#donateModal"
                  className="btn btn-danger mt-4"
                >
                  Donate
                </button>
                <DonationFormSection />
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#shareModal"
                  className="btn btn-primary button-secondary mt-4 "
                >
                  Share
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="shareModal"
                  tabindex="-1"
                  aria-labelledby="shareModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header share-modal-header">
                        <h5 className="modal-title" id="shareModal">
                          Help by Sharing
                        </h5>
                        <button
                          type="button"
                          className="btn-close share-button-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row mb-2  ">
                          <div className="col-md-12 d-flex flex-row px-2 ms-1 ">
                            <div className="col">
                              <div
                                className="fb-share-button"
                                data-href="https://developers.facebook.com/docs/plugins/"
                                data-layout="box_count"
                                data-size="small"
                              >
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://www.facebook.com/sharer/sharer.php?u= http://haminepal.org/"
                                  className="fb-xfbml-parse-ignore"
                                >
                                  <img src="/img/facebook.png" alt="facebook" />
                                </a>
                              </div>
                              <h5
                                style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Facebook
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="/img/viber.png" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Viber
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="/img/twitter.png" alt="twitter" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Twitter
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="/img/instagram.jpg" alt="instagram" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Instagram
                              </h5>
                            </div>
                            <div className="col">
                              <Link to="#">
                                <img src="/img/whatsapp.png" alt="whatsapp" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Whataspp
                              </h5>
                            </div>
                          </div>
                        </div>

                        <hr className="hrLine" />

                        <h5
                          className="modal-title share-modal-title"
                          id="shareModal"
                        >
                          Copy link
                        </h5>
                        <div className="row">
                          <div className="col-md-8">
                            <input
                              className="form-control mt-2"
                              type="text"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                          </div>
                          <div className="col-md-4">
                            <CopyToClipboard text={inputValue}>
                              <button className="btn btn-primary mt-2 text-center">
                                Copy
                              </button>
                            </CopyToClipboard>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 volunteer-heading">
            <h3 style={{ color: "#9F1718", fontWeight: "bold", fontSize: 30 }}>
              Volunteers involved
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          {items.map((items) => {
            return (
              <div className="col-md-12" key={items.id}>
                <div className="card card-01">
                  <div className="profile-box">
                    <img
                      className="card-img-top rounded-circle"
                      src={items.image}
                      alt="profile"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{items.name}</h4>
                    <p className="card-text mb-4 " style={{ color: "#9F1718" }}>
                      {items.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div className="container" style={{ marginTop: 130, marginBottom: 50 }}>
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div style={{ textTransform: "capitalize" }}>
          Project {slug} Not Found under {key}.
        </div>
      </div>
    </div>
  );
};

export default ProjectExtendedSection;
