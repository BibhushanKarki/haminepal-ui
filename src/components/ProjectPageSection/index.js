import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./project.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ProjectSectionData } from "./ProjectSectionData";
import DonationFormSection from "../../components/DonationFormSection";
import { Helmet } from "react-helmet";

const ProjectSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { key } = useParams();
  const [title, setTitle] = useState(key + " Projects");

  let currentProjectData;
  let history = useHistory();

  const currentProjectBundle = ProjectSectionData.filter(
    (keyBundle) => keyBundle.key === key
  )[0];

  if (currentProjectBundle) {
    currentProjectData = currentProjectBundle.data;
  }

  const changeHead = (title, url, description, image) => {
    setUrl(url);
    setTitle(title);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    setTitle(key);
  }, [key]);

  return currentProjectData ? (
    <>
      <Helmet>
        <title>{title} - HamiNepal</title>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
      <div className="container">
        <h2 style={{ textTransform: "capitalize", marginTop: 20 }}>{key}</h2>
      </div>
      {currentProjectData.length === 0 ? (
        <div className="container mt-5 mb-5">
          <div className="alert alert-info">
            No {key}
            <br />
            <button
              className="btn btn-info mt-2"
              style={{ color: "white" }}
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {currentProjectData.map((data) => {
        return (
          <div className="row mt-5 mb-5 px-5" key={data.id}>
            <div className="card card-event-section mb-3">
              <div className="row no-gutters">
                <div className="col-md-2">
                  <div className="imageContainer d-flex justify-content-center align-items-center h-100">
                    <img
                      src={data.thumbnailImage}
                      alt="Avatar"
                      className="imageSection "
                    />
                  </div>
                </div>
                <div className="col-md-8 event-card-section d-flex justify-content-center align-items-center h-100">
                  <div className="card-body">
                    <h5 className="card-title heading">{data.title}</h5>
                    <p className="card-text sub-heading">
                      {data.paragraph.substr(0, 400)}...
                      <br />
                      <br />
                      <Link
                        to={`/event/${key}/${data.slug}`}
                        style={{ color: "white", textDecoration: "none" }}
                        className="btn btn-info btn-sm"
                      >
                        See More
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <div className="card-body d-flex flex-column align-items-center justify-content-evenly h-100 p-0">
                    <Link
                      to="/volunteer-signup"
                      className="btn btn-danger w-100"
                    >
                      Volunteer
                    </Link>

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#donateModal"
                      className="btn btn-danger w-100"
                    >
                      Donate
                    </button>
                    <DonationFormSection />
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#shareModal"
                      className="btn btn-secondary button-secondary w-100"
                      onClick={() =>
                        changeHead(
                          data.title,
                          `http://haminepal.org/event/${key}/${data.slug}`,
                          `${data.paragraph.substr(0, 100)}...`,
                          `http://haminepal.org/${data.image}`
                        )
                      }
                    >
                      Share
                    </button>
                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="shareModal"
                      tabIndex="-1"
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
                                      href="https://www.facebook.com/sharer/sharer.php?u=http://haminepal.org/"
                                      className="fb-xfbml-parse-ignore"
                                    >
                                      <img
                                        src="/img/facebook.png"
                                        alt="facebook"
                                      />
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
                                    <img src="/img/viber.png" alt="viber" />
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
                                    <img src="/img/twitter.png" alt="viber" />
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
                                    <img
                                      src="/img/instagram.jpg"
                                      alt="instagram"
                                    />
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
                                    <img
                                      src="/img/whatsapp.png"
                                      alt="whatsapp"
                                    />
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
                              <div className="col-md-8 ">
                                <input
                                  className="form-control mt-2"
                                  type="text"
                                  value={inputValue}
                                  onChange={(e) =>
                                    setInputValue(e.target.value)
                                  }
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
        );
      })}
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
          Project {key} Not Found.
          <br />
          <button
            className="btn btn-info mt-2"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
