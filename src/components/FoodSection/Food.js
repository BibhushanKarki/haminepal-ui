import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedFood from "../GetStartedSection/GetStartedFood";

const FoodSection = () => {
  return (
    <div>
      <GetStartedFood />
      <TopFundRaisers title="Trending Covid Fundraisers" />
      <TopFundRaisers title="Top Fundraisers" />
    </div>
  );
};

export default FoodSection;
