import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { uploadDonation } from "../../store/Actions/DonationActions";

import queryString from 'query-string';

const DonationSuccessPage = ({ location }) => {
    const dispatch = useDispatch();

    const { uploadDonationLoading, uploadDonationError, uploadDonationSuccess, uploadDonationData } = useSelector(state => state.donation);

    var parsed = queryString.parse(location.search);

    useEffect(() => {
        dispatch(uploadDonation(parsed.amt))
    }, []);

    return (
        <div className="container mb-5">
            {uploadDonationLoading ? <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">Loading!</h4>
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> : ''}

            {uploadDonationError ? <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Something Bad Happened!</h4>
                <p>Aww snap, something went wrong.</p>
                <hr />
                <pre>{JSON.stringify(uploadDonationError, null, 4)}</pre>
            </div> : ''}

            {uploadDonationSuccess ? <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Thank you!</h4>
                <p className="mb-0">Your donation was successful.</p>
                <hr />
                <pre>{JSON.stringify(uploadDonationData.data, null, 2)}</pre>
            </div> : ''}
        </div>
    );
};

export default DonationSuccessPage;
