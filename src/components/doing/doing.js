import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
// SVG
import Svg1 from "../../images/SVG/cadeaulogo.svg";
import Svg2 from "../../images/SVG/capriani.svg";
import Svg3 from "../../images/SVG/casalogo.svg";
import Svg4 from "../../images/SVG/smartkids.svg";
import Img5 from "../../images/logo/pg.png";
import Img6 from "../../images/logo/logo1.png";
// images
import Image1 from "../../images/doing/img-1.png";
import Image2 from "../../images/doing/img-2.png";
import Image3 from "../../images/doing/img-3.png";
import Image4 from "../../images/doing/img-4.png";
import Image5 from "../../images/doing/img-5.png";
const Doing = () => {
  const optionCategorySlider = {
    dots: false,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsiveClass: true,
    navText: [
      '<i className="left-arrow-client" aria-hidden="true"></i>',
      '<i className="right-arrow-client" aria-hidden="true"></i>'
    ],
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 2
      },

      600: {
        items: 2
      },

      1024: {
        items: 4
      },

      1366: {
        items: 6
      }
    }
  };
  AOS.init();
  return (
    <>
      <section className="doing-section my-5">
        <div className="doing position-relative">
          <div className="container text-center">
            <h2 className="pt-5 pb-5 text-center main-text">Our Partners</h2>
            <div className="row gy-5" data-aos="fade-up">
              <OwlCarousel
                className="top-slider owl-theme"
                {...optionCategorySlider}
              >
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image1" src={Svg1} width="60px" alt="" />
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image2" src={Svg2} width="150px" alt="" />
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image3" src={Svg3} width="75px" alt="" />
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image4" src={Svg4} width="150px" alt="" />
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image4" src={Img5} width="100px" alt="" />
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <img className="img image1" src={Img6} width="100px" alt="" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Doing;
