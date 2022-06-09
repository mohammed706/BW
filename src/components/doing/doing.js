import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
// SVG
import Svg1 from "../../images/SVG/cadeaulogo.svg";
import Svg2 from "../../images/SVG/capriani.svg";
import Svg3 from "../../images/SVG/casalogo.svg";
import Svg4 from "../../images/SVG/smartkids.svg";
// images
import Image1 from "../../images/doing/img-1.png";
import Image2 from "../../images/doing/img-2.png";
import Image3 from "../../images/doing/img-3.png";
import Image4 from "../../images/doing/img-4.png";
import Image5 from "../../images/doing/img-5.png";
const Doing = () => {
  AOS.init();
  return (
    <>
      <section className="doing-section my-5">
        <div className="doing position-relative">
          <div className="container text-center">
            <h2 className="pt-5 pb-5 text-center main-text">Our Partners</h2>
            <div className="row gy-5" data-aos="fade-up">
              <div className="col-xl-3 col-md-3 col-sm-6">
                <img className="img" src={Svg1} width="100px" alt="" />
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <img className="img image2" src={Svg2} width="200px" alt="" />
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <img className="img" src={Svg3} width="100px" alt="" />
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <img className="img image4" src={Svg4} width="200px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Doing;
