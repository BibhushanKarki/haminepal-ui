import React, { useEffect, useState } from "react";
import "./volunteersignup.css";
import Joi from "joi";
import MapContainer from './../MapContainer';
import { useDispatch, useSelector } from "react-redux";
import { volunteerSignUp } from "../../store/Actions/VolunteerActions";

const SignUpSection = () => {
    const [volunteer, setVolunteer] = useState({
        lat: 0,
        lon: 0,
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { volunteerSignUpSuccess, volunteerSignUpError, volunteerSignUpLoading } = useSelector((state) => state.volunteer);

    const volunteerSchema = Joi.object({
        first_name: Joi.string()
            .pattern(/^[A-Za-z ]+$/)
            .min(3)
            .max(30)
            .required(),
        last_name: Joi.string()
            .pattern(/^[A-Za-z ]+$/)
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

        bio: Joi.string()
            .min(50)
            .max(400)
            .required(),

        motivation_to_join: Joi.string()
            .min(20)
            .max(200)
            .required(),

        age: Joi.number().required(),
        academic_qualification: Joi.string().required(),
        field_expertise: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        street_address: Joi.string().required(),
        terms_and_condition: Joi.boolean().invalid(false).required(),
        lat: Joi.number().required(),
        lon: Joi.number().required(),
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
            if (Object.keys(currentErrors).length === 0) {
                // dispatch volunter signup
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0;
                dispatch(volunteerSignUp(volunteer));
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {
                volunteerSignUpLoading ? <div className="container-sm  mb-5">
                    <div className="col-lg-12 col-sm-12 col-md-12"><div className="alert alert-info" role="alert">
                        <h4 className="alert-heading">Processing..</h4>
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    </div>
                </div> : ""}
            {
                volunteerSignUpError !== '' ? <div className="container-sm  mb-5">
                    <div className="col-lg-12 col-sm-12 col-md-12"><div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Something bad happened</h4>
                        <p>Sorry, but we could not submit the form, please try again.</p>
                        <button className="btn btn-outline-primary" onClick={e => dispatch(volunteerSignUp(volunteer))}>Try Again</button>
                    </div>
                    </div>
                </div> : ""}
            {
                volunteerSignUpSuccess ? <div className="container-sm  mb-5">
                    <div className="col-lg-12 col-sm-12 col-md-12"><div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Success</h4>
                        <p>We have recieved your request. Please wait while we call to verify your request.</p>
                    </div>
                    </div>
                </div> : ''}
            { volunteerSignUpLoading || volunteerSignUpSuccess || volunteerSignUpError !== '' ? '' :
                <div className="container  mb-5">
                    <form className="row d-flex justify-content-center mx-2">
                        <div className="col-lg-10 col-sm-12 col-md-12">
                            <div className="mb-4">

                                <h2 style={{
                                    textTransform: 'uppercase',
                                }} className="d-flex align-items-center"
                                >
                                    Sign up as a volunteer <img src="/assets/img/logo-only.png" alt="" style={{ marginLeft: 10 }} height="30px"></img>
                                </h2>
                                <p style={{ textAlign: 'left', textTransform: 'uppercase', fontWeight: 100, fontSize: 14 }}>
                                    We work with passion and dedication towards the betterment of the society.
                                        We are always in need of like minded individuals who want to help.<br /> <br />
                                        Please fill the form below to join us in our mission to make the world a better place.
                            </p>
                            </div>
                            <div
                                className="card px-4 py-3 text-center panel"
                                style={{
                                    boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
                                }}
                            >
                                <div className="card-title mt-3 separator">Basic Details</div>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="first_name" class="form-label">First Name</label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                className={`form-control formStyle ${errors.first_name ? "is-invalid" : ""
                                                    }`}
                                                placeholder="John"
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
                                        </div>
                                        {errors.first_name ? (
                                            <div
                                                id={`${errors.first_name}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.first_name}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="last_name" class="form-label">Last Name</label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                className={`form-control input-section formStyle ${errors.last_name ? "is-invalid" : ""
                                                    }`}
                                                placeholder="Doe"
                                                value={volunteer.last_name}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        last_name: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>
                                        {errors.last_name ? (
                                            <div
                                                id={`${errors.last_name}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                                role="alert"
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
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="mobile_number" class="form-label">Mobile Number</label>
                                            <input
                                                id="mobile_number"
                                                type="number"
                                                className={`form-control formStyle  ${errors.mobile_number ? "is-invalid" : ""
                                                    }`}
                                                placeholder="98XXXXXXXX"
                                                value={volunteer.mobile_number}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        mobile_number: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>
                                        {errors.mobile_number ? (
                                            <div
                                                id={`${errors.mobile_number}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
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
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="email" class="form-label">Email Address</label>
                                            <input
                                                id="email"
                                                type="text"
                                                className={`form-control formStyle  ${errors.email ? "is-invalid" : ""
                                                    }`}
                                                placeholder="john@doe.com"
                                                value={volunteer.email}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        email: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>
                                        {errors.email ? (
                                            <div
                                                id={`${errors.email}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.email}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="password" class="form-label">Password</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className={`form-control formStyle  ${errors.password ? "is-invalid" : ""
                                                    }`}
                                                placeholder="myPass123"
                                                value={volunteer.password}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        password: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>

                                        {errors.password ? (
                                            <div
                                                id={`${errors.password}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.password}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="bio" class="form-label">Bio</label>
                                            <textarea
                                                id="bio"
                                                placeholder="Bio"
                                                className={`form-control  input-section formStyle  ${errors.bio ? "is-invalid" : ""
                                                    }`}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        bio: e.target.value,
                                                    });
                                                }}
                                                required
                                            ></textarea>
                                        </div>
                                        {errors.bio ? (
                                            <div
                                                id={`${errors.bio}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.bio}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="motivation_to_join" class="form-label">Motivation To Join</label>
                                            <textarea
                                                id="motivation_to_join"
                                                placeholder="Motivation To Join"
                                                className={`form-control  input-section formStyle  ${errors.motivation_to_join ? "is-invalid" : ""
                                                    }`}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        motivation_to_join: e.target.value,
                                                    });
                                                }}
                                                required
                                            >{volunteer.motivation_to_join}</textarea>
                                        </div>
                                        {errors.motivation_to_join ? (
                                            <div
                                                id={`${errors.motivation_to_join}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.motivation_to_join}
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
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="age" class="form-label">Age</label>
                                            <input
                                                id="age"
                                                type="number"
                                                placeholder="17"
                                                className={`form-control formStyle  ${errors.age ? "is-invalid" : ""
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
                                        </div>
                                        {errors.age ? (
                                            <div
                                                id={`${errors.age}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
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
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="academic_qualification" class="form-label">Academic Qualification</label>
                                            <input
                                                id="academic_qualification"
                                                type="text"
                                                className="form-control"
                                                placeholder="BSW"
                                                className={`form-control formStyle  ${errors.academic_qualification ? "is-invalid" : ""
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
                                        </div>
                                        {errors.academic_qualification ? (
                                            <div
                                                id={`${errors.academic_qualification}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
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
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="field_expertise" class="form-label">Field Of Expertise</label>
                                            <input
                                                id="field_expertise"
                                                type="text"
                                                className="form-control"
                                                placeholder="Social Work"
                                                className={`form-control formStyle  ${errors.field_expertise ? "is-invalid" : ""
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
                                        </div>
                                        {errors.field_expertise ? (
                                            <div
                                                id={`${errors.field_expertise}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.field_expertise}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="row mt-5">

                                    <div className="col-lg-12 separator mb-4">
                                        General Locality
                                        </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="country" class="form-label">Country</label>
                                            <input
                                                id="country"
                                                type="text"
                                                className={`form-control formStyle  ${errors.country ? "is-invalid" : ""
                                                    }`}
                                                placeholder="Nepal"
                                                value={volunteer.country}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        country: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>
                                        {errors.country ? (
                                            <div
                                                id={`${errors.country}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.country}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="state" class="form-label">State</label>
                                            <input
                                                id="state"
                                                type="text"
                                                className={`form-control input-section formStyle  ${errors.state ? "is-invalid" : ""
                                                    }`}
                                                placeholder="1"
                                                value={volunteer.state}
                                                onChange={(e) => {
                                                    setVolunteer({
                                                        ...volunteer,
                                                        state: e.target.value,
                                                    });
                                                }}
                                                required
                                            />
                                        </div>
                                        {errors.state ? (
                                            <div
                                                id={`${errors.state}-error-messsage`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.state}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>

                                <div className="row mt-3 mb-4">
                                    <div className="col-lg-6">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="city" class="form-label">City</label>
                                            <input
                                                id="city"
                                                type="text"
                                                placeholder="Dharan"
                                                className={`form-control formStyle ${errors.city ? "is-invalid" : ""
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
                                        </div>
                                        {errors.city ? (
                                            <div
                                                id={`${errors.city}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.city}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group d-flex flex-column align-items-start">
                                            <label for="street_address" class="form-label">Street Address</label>
                                            <input
                                                id="street_address"
                                                type="text"
                                                placeholder="Buddha Marga"
                                                className={`form-control  input-section formStyle  ${errors.street_address ? "is-invalid" : ""
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
                                        </div>
                                        {errors.street_address ? (
                                            <div
                                                id={`${errors.street_address}-error-message`}
                                                // className="invalid-feedback"
                                                className="alert alert-danger"
                                            >
                                                {errors.street_address}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12 volunteer-map-section">
                                    <MapContainer />
                                </div>

                                <div className="row mt-3">
                                    <div className="col-lg-12 d-flex flex-row">
                                        <div className="col-lg-12 d-flex justify-content-center" style={{ color: "#fff" }}>
                                            <div className="form-group d-flex flex-row align-items-start">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={volunteer.terms_and_condition}
                                                    onChange={e => setVolunteer({ ...volunteer, terms_and_condition: e.target.checked })}
                                                    id="terms_and_conditions"
                                                />
                                                <label for="terms_and_conditions" >&nbsp; I agree terms of service & privacy policy.</label>
                                            </div>
                                        </div>
                                    </div>
                                    {errors.terms_and_condition ? (
                                        <div
                                            id={`${errors.terms_and_condition}-error-message`}
                                            // className="invalid-feedback"
                                            className="alert alert-danger"
                                        >
                                            {errors.terms_and_condition}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                <div className="row mt-4 mb-3">
                                    <div className="col-lg-12">

                                        {
                                            Object.keys(errors).length > 0 ? <div id={`error-messages-present`} role="alert" className="alert alert-danger mt-3">

                                                <h4 className="alert-heading">Couldn't submit the form.</h4>
                                                            Some errors are present in the form.
                                                        </div> : ''
                                        }
                                        <button
                                            type="submit"
                                            onClick={handleVolunteerSubmission}
                                            className=" btn btn-primary"
                                        >
                                            Be A Volunteer
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }

        </>
    );
};

export default SignUpSection;
