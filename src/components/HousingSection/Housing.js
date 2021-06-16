import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedHousing from "../GetStartedSection/GetStartedHousing";

const HousingSection = () => {
  return (
    <div>
      <GetStartedHousing />
      <TopFundRaisers title="Top Fundraisers" />
    </div>
  );
};

export default HousingSection;
