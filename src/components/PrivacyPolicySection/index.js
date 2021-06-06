import React from "react";
import { PrivacyPageData as data } from "./PrivacyPolicyData";
import { QuestionAnswerData as items } from "./QuestionAnswerData";
import Slide from "react-reveal/Slide";

const PrivacyPolicySection = () => {
  const privacyH1 = {
    textDecoration: "underline",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#9F1718",
  };

  const sectionHeading = {
    fontSize: "25px",
    color: "#9F1718",
  };

  const sectionHeadingh1 = {
    borderBottom: "1px solid rgb(208 96 97)",
    fontSize: "25px",
    color: "#9F1718",
    fontWeight: "600",
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="privacy-heading col-md-12">
            <div className="col-sm-12 col-lg-3 col-md-4">
              <h1 className="pb-2 text-start" style={privacyH1}>
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <Slide bottom>
            <div className="col-md-12">
              <h1 style={sectionHeading}>
                We are commited to protecting and respecting your privacy.
              </h1>
              {data.map((data, key) => {
                return (
                  <p className="mt-3" key={key}>
                    {data.paragraph}
                  </p>
                );
              })}
            </div>
          </Slide>
        </div>
        <div className="row">
          <Slide bottom>
            <div className="col-md-12">
              {items.map((items, key) => {
                return (
                  <div key={key}>
                    <div className="col-lg-6 col-sm-12">
                      <h1 className="mt-3 pb-2" style={sectionHeadingh1}>
                        {items.question}
                      </h1>
                    </div>
                    <p className="mt-3 mb-4">{items.answer}</p>
                  </div>
                );
              })}
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicySection;
