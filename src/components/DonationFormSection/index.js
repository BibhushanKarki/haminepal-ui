import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import haminepali from "../../assets/images/haminepalilogo1.png";
import ThankyouForDonationForm from "../../components/ThankyouDonationForm";
import "./donationform.css";
import { useDispatch, useSelector } from "react-redux";
import { clearDonation, donate, uploadDonation } from "../../store/Actions/DonationActions";
import KhaltiCheckout from "khalti-checkout-web";
import Joi from "joi";

const DonationFormSection = ({ slug, type }) => {

    const [anonymousDonor, setAnonymousDonor] = useState(false);

    const [donation, setDonation] = useState({
        type,
        slug,
        is_anonymous: anonymousDonor
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const { donationSuccess, donationError, uploadDonationSuccess, uploadDonationData } = useSelector((state) => state.donation);

    let donationSchema;

    if (anonymousDonor) {
        donationSchema = Joi.object({
            is_anonymous: Joi.boolean().required(),
            donation_amount: Joi.number().required(),
            donation_message: Joi.string().required(),

            payment_type: Joi.string().required(),
            terms_and_conditions: Joi.boolean().invalid(false).required(),

            type: Joi.string().required(),
            slug: Joi.string().required(),
        });
    } else {
        donationSchema = Joi.object({
            is_anonymous: Joi.boolean().required(),
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
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

            phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),

            street_address: Joi.string(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            zip_code: Joi.number().required(),
            country: Joi.string().required(),

            donation_amount: Joi.number().required(),
            donation_message: Joi.string().required(),

            payment_type: Joi.string().required(),
            terms_and_conditions: Joi.boolean().invalid(false).required(),

            type: Joi.string().required(),
            slug: Joi.string().required(),
        });
    }

    const makeRandomString = length => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const handlePayWithEsewa = () => {
        let path = "https://esewa.com.np/epay/main";

        let params = {
            tAmt: donation.donation_amount,
            amt: donation.donation_amount,
            txAmt: 0,
            psc: 0,
            pdc: 0,
            scd: "NP-ES-NEPALI",
            pid: makeRandomString(20),
            su: 'https://haminepal.org/#/donation/success',
            fu: 'https://haminepal.org/#/donation/error',
        }

        let form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("action", path);

        for (let key in params) {
            let hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }

        document.body.appendChild(form);
        form.submit();
    }

    const handlePayWithKhalti = () => {
        let khaltiConfig = {
            // replace this key with yours
            "publicKey": "live_public_key_49ed4dbc80114acab3ae759e980597d6",
            "productIdentity": makeRandomString(20),
            "productName": slug,
            "productUrl": "https://hami-nepali-newui.netlify.app/",
            "eventHandler": {
                onSuccess({ amount, token }) {
                    dispatch(donate({
                        ...donation,
                        KHALTI_TOKEN: token
                    }));
                    dispatch(uploadDonation(amount / 100)); // BECAUSE KHALTI AMOUNT IS IN PAISA SO CONVERTING TO RUPPEE
                },
                // onError handler is optional
                onError(error) {
                    console.log(error);
                    // handle errors
                    dispatch(clearDonation())
                },
                onClose() {
                    dispatch(clearDonation())
                }
            },
            "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
        };

        let checkout = new KhaltiCheckout(khaltiConfig);

        checkout.show({ amount: donation.donation_amount * 100 }); // BECAUSE KHALTI EXPECTS AMOUNT IN PAISAS SO CONVERTING USER INPUT OF RUPPEE TO PAISA
    }

    const handleDonationSubmission = e => {
        e.preventDefault();

        try {
            const value = donationSchema.validate({ ...donation }, { abortEarly: false });
            let currentErrors = {};

            setErrors({});
            if (value.error) {
                value.error.details.forEach(error => {
                    currentErrors[error.context.key] = error.message;
                });
            }

            setErrors({
                ...currentErrors
            });

            if (Object.keys(currentErrors).length === 0) {
                // store in redux and local storage
                dispatch(donate(donation));

                // do the payment gateway thing
                switch (donation.payment_type) {
                    case 'ESEWA':
                        handlePayWithEsewa();
                        break;
                    case 'KHALTI':
                        handlePayWithKhalti();
                        break;
                    default:
                        break;
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log(donation);
        setDonation({
            ...donation,
            is_anonymous: anonymousDonor
        })
    }, [anonymousDonor]);

    return (
        <>
            <div
                className="modal fade"
                id={`donateModal-${slug}`}
                tabIndex="-1"
                aria-labelledby="donateModalLabel"
                aria-hidden="true"
            >
                {
                    uploadDonationSuccess ? <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Thank you!</h4>
                        <p className="mb-0">We have received your donation.</p>
                        <hr />
                        <pre>{JSON.stringify(uploadDonationData.data, null, 2)}</pre>
                    </div> :
                        <div className="modal-dialog modal-lg ">
                            <div className="modal-content ">
                                <nav
                                    className="navbar navbar-light  justify-content-between  px-5"
                                    style={{
                                        boxShadow: "9px 10px 5px -8px rgba(191, 183, 183, 0.75)",
                                    }}
                                >
                                    <Link to="#" className="navbar-brand">
                                        <img src={haminepali} alt="logo" />
                                    </Link>

                                    <button
                                        className="btn btn-primary my-2 my-sm-0"
                                        type="button"
                                        onClick={() => setAnonymousDonor(!anonymousDonor)}
                                    >
                                        Donate {anonymousDonor ? 'Publicly ' : 'Anynomously'}
                                    </button>
                                </nav>

                                <div className="row mt-5">
                                    <div className="donate-form col-md-12 d-flex justify-content-center flex-column align-items-center">
                                        <div className="col-md-6 donation-form-heading">
                                            <h1 className=" text-center">{anonymousDonor ? 'Anynomous ' : ''}Donation Form</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-body ">
                                    <div className="row ">
                                        <form className="d-flex justify-content-center">
                                            <div className="col-md-12">
                                                <div
                                                    className="card donation-card px-5 py-3 text-center"
                                                    style={{
                                                        border: "none",
                                                        boxShadow: "rgb(0 0 0 / 15%) 1px 6px 20px 0px",
                                                        borderRadius: 20
                                                    }}
                                                >
                                                    {
                                                        !anonymousDonor ? <><div className="row mt-3">
                                                            <div className="col-md-6 form-group">
                                                                <input
                                                                    type="text"
                                                                    className={`form-control formStyle ${errors.first_name ? 'is-invalid' : ''}`}
                                                                    placeholder="First Name"
                                                                    value={donation.first_name}
                                                                    onChange={e => {
                                                                        setDonation({
                                                                            ...donation,
                                                                            first_name: e.target.value
                                                                        })
                                                                    }}
                                                                    required
                                                                />
                                                                {errors.first_name ?
                                                                    <div id={`${errors.first_name}-error-message`} className="invalid-feedback">
                                                                        {errors.first_name}
                                                                    </div> : ''
                                                                }
                                                            </div>
                                                            <div className="col-md-6 card-input-section form-group">
                                                                <input
                                                                    type="text"
                                                                    className={`form-control formStyle  ${errors.last_name ? 'is-invalid' : ''}`}
                                                                    placeholder="Last Name"

                                                                    value={donation.last_name}
                                                                    onChange={e => {
                                                                        setDonation({
                                                                            ...donation,
                                                                            last_name: e.target.value
                                                                        })
                                                                    }}
                                                                    required
                                                                />
                                                                {errors.last_name ?
                                                                    <div id={`${errors.last_name}-error-message`} className="invalid-feedback">
                                                                        {errors.last_name}
                                                                    </div> : ''
                                                                }
                                                            </div>
                                                        </div>
                                                            <div className="row mt-3">
                                                                <div className="col-md-6 form-group">
                                                                    <input
                                                                        type="email"
                                                                        className={`form-control formStyle  ${errors.email ? 'is-invalid' : ''}`}
                                                                        placeholder="Email Address"
                                                                        value={donation.email}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                email: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.email ?
                                                                        <div id={`${errors.email}-error-message`} className="invalid-feedback">
                                                                            {errors.email}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                                <div className="col-md-6 card-input-section form-group">
                                                                    <input
                                                                        type="number"
                                                                        className={`form-control formStyle  ${errors.phone_number ? 'is-invalid' : ''}`}
                                                                        placeholder="Phone Number"
                                                                        value={donation.phone_number}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                phone_number: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.phone_number ?
                                                                        <div id={`${errors.phone_number}-error-message`} className="invalid-feedback">
                                                                            {errors.phone_number}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                            </div>

                                                            <div className="row mt-3">
                                                                <div className="col-md-12 form-group">
                                                                    <input
                                                                        type="text"
                                                                        className={`form-control formStyle  ${errors.street_address ? 'is-invalid' : ''}`}
                                                                        placeholder="Street Address"
                                                                        value={donation.street_address}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                street_address: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.street_address ?
                                                                        <div id={`${errors.street_address}-error-message`} className="invalid-feedback">
                                                                            {errors.street_address}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-md-6 form-group">
                                                                    <input
                                                                        type="text"
                                                                        className={`form-control formStyle  ${errors.city ? 'is-invalid' : ''}`}
                                                                        placeholder="City"
                                                                        value={donation.city}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                city: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.city ?
                                                                        <div id={`${errors.city}-error-message`} className="invalid-feedback">
                                                                            {errors.city}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                                <div className="col-md-6 card-input-section form-group">
                                                                    <input
                                                                        type="text"
                                                                        className={`form-control formStyle  ${errors.state ? 'is-invalid' : ''}`}
                                                                        placeholder="State/Province/Region"
                                                                        value={donation.state}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                state: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.state ?
                                                                        <div id={`${errors.state}-error-message`} className="invalid-feedback">
                                                                            {errors.state}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                            </div>

                                                            <div className="row mt-3">
                                                                <div className="col-md-6 form-group">
                                                                    <input
                                                                        type="number"
                                                                        className={`form-control formStyle  ${errors.zip_code ? 'is-invalid' : ''}`}
                                                                        placeholder="Zip/Postal code"
                                                                        value={donation.zip_code}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                zip_code: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.zip_code ?
                                                                        <div id={`${errors.zip_code}-error-message`} className="invalid-feedback">
                                                                            {errors.zip_code}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                                <div className="col-md-6 card-input-section form-group">
                                                                    <input
                                                                        type="text"
                                                                        className={`form-control formStyle  ${errors.country ? 'is-invalid' : ''}`}
                                                                        placeholder="Country"
                                                                        value={donation.country}
                                                                        onChange={e => {
                                                                            setDonation({
                                                                                ...donation,
                                                                                country: e.target.value
                                                                            })
                                                                        }}
                                                                        required
                                                                    />
                                                                    {errors.country ?
                                                                        <div id={`${errors.country}-error-message`} className="invalid-feedback">
                                                                            {errors.country}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                            </div>
                                                        </> : ''
                                                    }

                                                    <div
                                                        className="row mt-5"
                                                        style={{ backgroundColor: "#9f1718" }}
                                                    >
                                                        <div className="col-md-12">
                                                            <h5 className="text-white my-1">Donation Details</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12 form-group">
                                                            <input
                                                                type="number"
                                                                value={donation.donation_amount}
                                                                onChange={e => {
                                                                    setDonation({
                                                                        ...donation,
                                                                        donation_amount: e.target.value
                                                                    })
                                                                }}
                                                                className={`form-control formStyle  ${errors.donation_amount ? 'is-invalid' : ''}`}
                                                                placeholder="Donation Amount"
                                                                required
                                                            />
                                                            {errors.donation_amount ?
                                                                <div id={`${errors.donation_amount}-error-message`} className="invalid-feedback">
                                                                    {errors.donation_amount}
                                                                </div> : ''
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12 form-group">
                                                            <textarea
                                                                className={`form-control formStyle  ${errors.donation_message ? 'is-invalid' : ''}`}
                                                                placeholder="Donation Message"
                                                                required
                                                                onChange={e => {
                                                                    setDonation({
                                                                        ...donation,
                                                                        donation_message: e.target.value
                                                                    })
                                                                }}
                                                            >{donation.donation_message}</textarea>
                                                            {errors.donation_message ?
                                                                <div id={`${errors.donation_message}-error-message`} className="invalid-feedback">
                                                                    {errors.donation_message}
                                                                </div> : ''
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="row mt-5">
                                                        <div className="pay-with col-md-12 d-flex justify-content-center flex-column align-items-center">
                                                            <div className="col-md-3 pay-with">
                                                                <h5 className="pb-2 ">Pay With</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onChange={e => {
                                                        setDonation({
                                                            ...donation,
                                                            payment_type: e.target.value
                                                        })
                                                    }} value={donation.payment_type}>
                                                        {errors.payment_type ?
                                                            <div id={`${errors.payment_type}-error-message`} style={{ display: 'block' }} className="invalid-feedback">
                                                                {errors.payment_type}
                                                            </div> : ''
                                                        }
                                                        <div className="row mt-3">
                                                            <div className="col-xs-0 col-sm-3 col-md-2 col-lg-2"></div>
                                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                                <div className="pay-with d-flex align-items-center form-check h-100">
                                                                    <input type="radio" className="form-check" name="payment_type" id="esewa" value="ESEWA" />
                                                                    <label for="esewa"><img src="/img/esewa_logo.png" alt="esewa" /></label>
                                                                </div>
                                                            </div>

                                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                                <div className="pay-with d-flex align-items-center form-check h-100">
                                                                    <input type="radio" className="form-check" name="payment_type" id="khalti" value="KHALTI" />
                                                                    <label for="khalti"><img src="/img/khalti_logo.png" alt="khalti" /></label>
                                                                </div>
                                                            </div>
                                                            <div style={{
                                                                letterSpacing: 2,
                                                                fontSize: 20,
                                                                fontWeight: 200,
                                                                marginTop: 20,
                                                            }}>
                                                                OR VIA
                                                    </div>
                                                            <div className="col-xs-0 col-sm-3 col-md-4 col-lg-4"></div>
                                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                                <div className="pay-with d-flex align-items-center form-check h-100">
                                                                    <img src="/img/gofundme_logo.png" alt="gofundme" onClick={_ => window.open('https://www.gofundme.com/f/help-nepal-stop-covid19-human-castastrophe/donate', '_blank')} style={{
                                                                        height: 85,
                                                                        marginLeft: 20,
                                                                        cursor: 'pointer'
                                                                    }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-3">
                                                        <div className="col-md-12 d-flex flex-row">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="terms_and_conditions"
                                                                onChange={e => {
                                                                    setDonation({
                                                                        ...donation,
                                                                        terms_and_conditions: e.target.checked
                                                                    })
                                                                }}
                                                            />
                                                            <label className="terms-section" style={{ marginLeft: 10 }} for="terms_and_conditions">
                                                                I agree to the terms of service and privacy policy.
                                                    </label>
                                                        </div>
                                                        {errors.terms_and_conditions ?
                                                            <div id={`${errors.terms_and_conditions}-error-message`} style={{ display: 'block' }} className="invalid-feedback">
                                                                {errors.terms_and_conditions}
                                                            </div> : ''
                                                        }
                                                    </div>

                                                    <div className="row mt-4 mb-3">
                                                        <div className="col-md-12">
                                                            {
                                                                Object.keys(errors).length > 0 ? <div id={`error-messages-present`} role="alert" className="alert alert-danger mt-3">

                                                                    <h4 className="alert-heading">Couldn't submit the form.</h4>
                                                            Some errors are present in the form.
                                                        </div> : ''
                                                            }
                                                            {donationError ? <div role="alert" className="alert alert-danger mt-3">

                                                                <h4 className="alert-heading">Couldn't submit the form.</h4>
                                                                {donationError}
                                                            </div> : ''}
                                                            {donationSuccess ? <div role="alert" className="alert alert-success mt-3">
                                                                <h4 className="alert-heading">Donation Submitted.</h4>
                                                                {donationError}
                                                            </div> : ''}
                                                            <button
                                                                type="submit"
                                                                className=" btn btn-primary"
                                                                onClick={handleDonationSubmission}
                                                            >
                                                                Donate Now
                                                </button>
                                                        </div>
                                                    </div>
                                                    <ThankyouForDonationForm />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
              </button>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </>
    );
};

export default DonationFormSection;
