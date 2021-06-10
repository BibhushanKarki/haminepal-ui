import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearDonation } from "../../store/Actions/DonationActions";

const DonationErrorPage = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearDonation())
    }, []);

    return (
        <div className="container mb-5">
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Something Bad Happened!</h4>
                <p>Aww snap, we don't know what happened but somehow the donation didn't go through. Please try again later.</p>
                <hr />
                <button onClick={() => history.goBack()} className="mb-0 btn btn-primary">Go Back</button>
            </div>
        </div>
    );
};

export default DonationErrorPage;
