import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedCovid from "../GetStartedSection/GetStartedCovid";
const CovidSection = () => {
  return (
    <div>
      <GetStartedCovid />
      <TopFundRaisers title="Trending Covid Fundraisers" />
    </div>
  );
};

export default CovidSection;
