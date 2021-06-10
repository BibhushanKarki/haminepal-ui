import React from "react";

const FaqSection = () => {
  const faqSection = {
    color: "#9F1718",
    borderBottom: "2px solid white",
  };

  const hrline = {
    borderBottom: "3px solid #9F1718",
  };

  const faqheading = {
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row" style={faqSection}>
          <div className="faq-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-2" style={hrline}>
              <h1 className="pb-1 text-center" style={faqheading}>
                FAQs
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is Hami Nepal?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Hami Nepal is an organisation that was established for
                    immediate action in order to help those in need, without any
                    expectations in return.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    When was Hami Nepal established?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Hami Nepal was established on 2015 A.D. and has been active
                    since then.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What we do?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    The organisation is currently working solely in the field
                    COVID-19 in order to provide medical relief to individuals
                    as well as medical institutions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What are major achievements of Hami Nepal?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Earlier during earthquake, our president Mr. Sudan Gurung,
                    had led as many as 1600 volunteers for earthquake
                    reconstruction and relief. Now, when the nation is facing
                    another crisis, we had made plasma bank for COVID-19
                    recovery. We converted unused government spaces into COVID
                    facilities and provided support to 3 different government
                    hospitals. Also, Hami Nepal is the first non-profit
                    organisation to import oxygen cylinders in Nepal during
                    oxygen shortage amid second COVID wave.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    How does the organisation manage donation?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    When any 'kind donation' (donation referred to as supplies
                    instead of money) is received by the organisation, we find
                    out where the supply is needed. We then send our volunteers
                    to check whether the person is in need of the supply or not.
                    If they really need the supply, we provide the necessary
                    supply and keep track of what's happening by making regular
                    follow-ups. Similarly, if someone provides'cash donation',
                    we convert the cash into 'kind donation' and repeat the same
                    procedure as above.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Will this organisation misuse my donation?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    The organisation doesn't spend any of the received donations
                    on administration cost as we believe that 100% of the
                    donation should reach the recipient in order to establish
                    effective helping. All of our volunteers, mobilized for the
                    authentication of the problem, logistics and delivery, cover
                    their own expenses in order to save the administrative
                    expense
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    How to donate?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Hami Nepal accepts 'cash donation' as well as 'kind
                    donation'. If someone wish to donate in 'kind donation', you
                    can contact our team. If you wish to donate in 'cash
                    donation', then here's list of where you can donate:
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    How to check expenses?
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Users can check how much amount donation has been spent,
                    Bill will be generated for every expenditure spend on the
                    cause, and also the list of the overall expenses will be
                    displayed if the user clicks on the expenses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
