import React from "react";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const imglink =
  "https://images.unsplash.com/photo-1601972602237-8c79241e468b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";

const DownloadApp = () => {
  const storeStyle = {
    width: "160px",
    height: "50px",
    marginRight: "1rem",
  };
  return (
    <div className="row d-flex justify-content-center mt-5 ">
      <div className="col-lg-8 d-flex align-items-center downloadApp">
        <div className=" col-md-6 mx-sm-2 ">
          <img
            src={imglink}
            alt="appdownload"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="downloadDesc mx-4 col-md-6 ">
          <h4 className="fw-bold text-uppercase">Coming Soon</h4>
          <h5 className="fw-bold" style={{ color: "#9F1718" }}>
            HamiNepal App
          </h5>
          <p className="fw-bold">
            Start and manage fundraisers, engage with supporters, and discover
            important causes — all on the go
          </p>
          <div className="storeBtn d-flex">
            <img src={appstore} alt="appstore" style={storeStyle} />
            <img src={playstore} alt="playstore" style={storeStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
