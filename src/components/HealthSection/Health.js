import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedHealth from "../GetStartedSection/GetStartedHealth";

const HealthSection = () => {
  return (
    <div>
      <GetStartedHealth />
      <TopFundRaisers title="Top Fundraisers" />
    </div>
  );
};

export default HealthSection;
