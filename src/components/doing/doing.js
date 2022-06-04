import React from "react";
import Image1 from "../../images/doing/img-1.png";
import Image2 from "../../images/doing/img-2.png";
import Image3 from "../../images/doing/img-3.png";
import Image4 from "../../images/doing/img-4.png";
import Image5 from "../../images/doing/img-5.png";
const Doing = () => {
  return (
    <>
      <section className="doing-section my-5">
        <div className="doing position-relative">
          <div className="container text-center">
            <h2 className="pt-5 pb-5 text-center main-text">
              We Can Do Anything
            </h2>
            <div className="row gy-5">
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image1} alt="" />
              </div>
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image2} alt="" />
              </div>
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image3} alt="" />
              </div>
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image4} alt="" />
              </div>
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image5} alt="" />
              </div>
              <div className="col-xl-2 col-sm-6">
                <img className="img-fluid" src={Image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Doing;
