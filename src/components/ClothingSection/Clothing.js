import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedClothing from "../GetStartedSection/GetStartedClothing";

const ClothingSection = () => {
  return (
    <div>
      <GetStartedClothing />
      <TopFundRaisers title="Top Fundraisers" />
    </div>
  );
};

export default ClothingSection;
