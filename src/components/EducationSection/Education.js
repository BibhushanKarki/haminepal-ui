import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedEducation from "../GetStartedSection/GetStartedEducation";

const EducationSection = () => {
  return (
    <div>
      <GetStartedEducation />
      <TopFundRaisers title="Trending Covid Fundraisers" />
      <TopFundRaisers title="Top Fundraisers" />
      {/* {/* <TopFundRaisers/> */}
    </div>
  );
};

export default EducationSection;
