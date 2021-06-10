import React from "react";
import img from "../../assets/images/howitworks.jpg";
const HowItWorks = () => {
  const titleStyle = {
    marginTop: "4rem",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    height: "35vh",
    color: "#fff",
  };
  const hrline = {
    borderBottom: "2px solid white",
  };
  const howImgStyle = {
    width: "95vw",
    height: "500px",
    objectFit: "cover",
    objectPosition: "center center",
  };

  return (
    <section className="how">
      <div className="row" style={titleStyle}>
        <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
          <div className="col-md-6">
            <h1 className="pb-2 text-center" style={hrline}>
              How HamiNepal Works?
            </h1>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 d-flex justify-content-center "
        style={{ marginTop: "-2rem" }}
      >
        <div className="card col-md-8">
          <div className="card-body p-4">
            <p className="card-text" style={{ color: "#9F1718" }}>
              Our main objective is to help anyone in need without any
              hesitations and expectation of payback. Hami Nepal directly
              connects donors and recipients to maintain transparency. The
              organisation doesn’t spend any of the received donations on
              administration cost as we believe that 100% of the donation should
              reach the recipient in order to establish effective helping. All
              of our volunteers, mobilised for the authentication of the
              problem, logistics and delivery, cover their own expenses in order
              to save the administrative expense. We are implementing
              skill-based volunteering to facilitate healthcare services and
              mitigate the risk of this devastating COVID-19 cases surge, at the
              time being.
            </p>
          </div>
        </div>
      </div>
      <div className="howitworks col-lg-12 my-4 d-flex justify-content-center w-100">
        <ul style={{ listStyle: "none" }}>
          <li>
            Users can see how much amount is collected for the cause, how much
            amount has been donated for the cause, and how much amount is
            remaining.
          </li>
          <li>
            As per their interest users can donate to a specific cause even. If
            he/she wants to donate only for their school then users have that
            right to donate only what they want.
          </li>
          <li>Users can also donate to multiple causes if they wish.</li>
          <li>
            The event section will have the various events covered where users
            can check into the events and donate for the selective cause.
          </li>
          <li>
            Users can see victim's information like their personal phone number
            and address where users can directly contact victims and donate
            directly.
          </li>
        </ul>
      </div>
      <div className="text-center mt-2">
        <img src={img} alt="" style={howImgStyle} />
      </div>
    </section>
  );
};

export default HowItWorks;
