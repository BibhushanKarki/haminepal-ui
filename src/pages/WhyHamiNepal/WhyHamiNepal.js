import React from "react";

const WhyHamiNepal = () => {
  const titleStyle = {
    marginTop: "4rem",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    height: "35vh",
    color: "#fff",
  };
  const hrline = {
    borderBottom: "2px solid white",
  };

  return (
    <section className="why">
      <div className="row" style={titleStyle}>
        <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
          <div className="col-md-6">
            <h1 className="pb-2 text-center" style={hrline}>
              Why HamiNepal?
            </h1>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center" style={{marginTop:'-2rem'}}>
        <div class="card col-9">
          <div class="card-body p-4">
            <p class="card-text" style={{ color: "#9F1718" }}>
              Hami Nepal has been connecting hundreds of volunteers to local
              communities all overthe world since its first initiation in 2015.
              The emergency response program and the post-earthquake
              rehabilitation programs were the initial programs successfully
              carried out by Hami Nepal.This is a Group Volunteer Organization
              initiated by the youth with a vision to create sustainable in the
              local communities through community development. The “I to We”
              movement initiated by Hami Nepal is based on uniting to aid the
              people in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHamiNepal;
