import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { uploadDonation } from "../../store/Actions/DonationActions";

const DonationSuccessPage = () => {
    const dispatch = useDispatch();

    const { uploadDonationLoading, uploadDonationError, uploadDonationSuccess } = useSelector(state => state.donation);

    useEffect(() => {
        dispatch(uploadDonation())
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
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div> : ''}
        </div>
    );
};

export default DonationSuccessPage;
