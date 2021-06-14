import React, { useState } from "react";
import "./volunteersignup.css";
import Joi from "joi";

const SignUpSection = () => {
  const [volunteer, setVolunteer] = useState({});
  const [errors, setErrors] = useState({});

  const volunteerSchema = Joi.object({
    first_name: Joi.string()
      .pattern(/^[A-Za-z]+$/)
      .min(3)
      .max(30)
      .required(),
    last_name: Joi.string()
      .pattern(/^[A-Za-z]+$/)
      .min(3)
      .max(30)
      .required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),

    mobile_number: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),

    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),

    age: Joi.number().required(),
    academic_qualification: Joi.string().required(),
    field_expertise: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.number().required(),
    street_address: Joi.string().required(),
  });

  const handleVolunteerSubmission = (e) => {
    e.preventDefault();

    try {
      const value = volunteerSchema.validate(
        { ...volunteer },
        { abortEarly: false }
      );
      let currentErrors = {};

      setErrors({});
      if (value.error) {
        value.error.details.forEach((error) => {
          currentErrors[error.context.key] = error.message;
        });
      }

      setErrors({
        ...currentErrors,
      });
      console.log(currentErrors);
    } catch (err) {
      console.log(err);
    }
  };

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
                    className={`form-control formStyle ${
                      errors.first_name ? "is-invalid" : ""
                    }`}
                    placeholder="Firstname"
                    // name="firstname"
                    value={volunteer.first_name}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        first_name: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.first_name ? (
                    <div
                      id={`${errors.first_name}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.first_name}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`form-control insput-section formStyle ${
                      errors.last_name ? "is-invalid" : ""
                    }`}
                    placeholder="LastName"
                    value={volunteer.last_name}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        last_name: e.target.value,
                      });
                    }}
                    required
                  />

                  {errors.last_name ? (
                    <div
                      id={`${errors.last_name}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.last_name}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="number"
                    className={`form-control formStyle  ${
                      errors.mobile_number ? "is-invalid" : ""
                    }`}
                    placeholder="Mobile Number"
                    value={volunteer.mobile_number}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        mobile_number: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.mobile_number ? (
                    <div
                      id={`${errors.mobile_number}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.mobile_number}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className={`form-control formStyle  ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email-Address"
                    value={volunteer.email}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        email: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.email ? (
                    <div
                      id={`${errors.email}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.email}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    required
                  />
                </div>
              </div> */}
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="password"
                    className={`form-control formStyle  ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    value={volunteer.password}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        password: e.target.value,
                      });
                    }}
                    required
                  />

                  {errors.password ? (
                    <div
                      id={`${errors.password}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.password}
                    </div>
                  ) : (
                    ""
                  )}
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
                    placeholder="Age"
                    className={`form-control formStyle  ${
                      errors.age ? "is-invalid" : ""
                    }`}
                    value={volunteer.age}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        age: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.age ? (
                    <div
                      id={`${errors.age}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.age}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Academic Qualification"
                    className={`form-control formStyle  ${
                      errors.academic_qualification ? "is-invalid" : ""
                    }`}
                    value={volunteer.academic_qualification}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        academic_qualification: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.academic_qualification ? (
                    <div
                      id={`${errors.academic_qualification}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.academic_qualification}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Field Of Expertise"
                    className={`form-control formStyle  ${
                      errors.field_expertise ? "is-invalid" : ""
                    }`}
                    value={volunteer.field_expertise}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        field_expertise: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.field_expertise ? (
                    <div
                      id={`${errors.field_expertise}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.field_expertise}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`form-control formStyle  ${
                      errors.country ? "is-invalid" : ""
                    }`}
                    placeholder="Country"
                    value={volunteer.country}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        country: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.country ? (
                    <div
                      id={`${errors.country}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.country}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6 ">
                  <input
                    type="text"
                    className={`form-control input-section formStyle  ${
                      errors.state ? "is-invalid" : ""
                    }`}
                    placeholder="State/Province/Religion"
                    value={volunteer.state}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        state: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.state ? (
                    <div
                      id={`${errors.state}-error-messsage`}
                      className="invalid-feedback"
                    >
                      {errors.state}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="City"
                    className={`form-control formStyle  ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    value={volunteer.city}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        city: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.city ? (
                    <div
                      id={`${errors.city}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.city}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Street Address"
                    className={`form-control  input-section formStyle  ${
                      errors.street_address ? "is-invalid" : ""
                    }`}
                    value={volunteer.street_address}
                    onChange={(e) => {
                      setVolunteer({
                        ...volunteer,
                        street_address: e.target.value,
                      });
                    }}
                    required
                  />
                  {errors.street_address ? (
                    <div
                      id={`${errors.street_address}-error-message`}
                      className="invalid-feedback"
                    >
                      {errors.street_address}
                    </div>
                  ) : (
                    ""
                  )}
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
                  <button
                    type="submit"
                    onClick={handleVolunteerSubmission}
                    className=" btn btn-primary"
                  >
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
