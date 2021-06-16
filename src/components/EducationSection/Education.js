import React from "react";
import TopFundRaisers from "../TopFundRaisers/TopFundRaisers";
import GetStartedEducation from "../GetStartedSection/GetStartedEducation";

const EducationSection = () => {
  return (
    <div>
      <GetStartedEducation />
      <TopFundRaisers title="Top Fundraisers" />
    </div>
  );
};

export default EducationSection;
