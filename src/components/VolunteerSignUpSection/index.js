import React from "react";
import "./volunteersignup.css";

const SignUpSection = () => {
  return (
    <>
      <div className="container-sm  mb-5">
        <form className="row d-flex justify-content-center mx-2">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div
              className="card px-4 py-3 text-center panel"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
              }}
            >
              <div className="card-title mt-3 separator">Sign Up</div>
              <hr />
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Firstname"
                    name="firstname"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control input-section"
                    placeholder="LastName"
                    name="lastname"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email-Address"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="row  mt-5">
                <div className="col-lg-12 separator ">
                  Additional Information
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    name="age"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Academic Qualification"
                    name="academicqualification"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Field Of Expertise"
                    name="expertisefield"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    required
                  />
                </div>
                <div className="col-lg-6 ">
                  <input
                    type="text"
                    className="form-control input-section"
                    placeholder="State/Province/Religion"
                    name="state"
                    required
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control input-section"
                    placeholder="Street Address"
                    name="streetaddress"
                    required
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12 volunteer-map-section">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=raniban,samakushi,kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="myFrame"
                    allowfullScreen
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12 d-flex flex-row">
                  <div className="col-lg-2">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                  </div>
                  <div className="col-lg-10" style={{ color: "#fff" }}>
                    I agree terms of service & privacy policy.
                  </div>
                </div>
              </div>

              <div className="row mt-4 mb-3">
                <div className="col-lg-12">
                  <button type="submit" className=" btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpSection;
