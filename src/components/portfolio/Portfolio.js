import Image1 from "../../images/icons/date-icon.png";
import Image2 from "../../images/latest-projects/img-1.png";
import Image3 from "../../images/latest-projects/paint.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Portfolio = () => {
  AOS.init({
    duration: 1200
  });
  return (
    <section id="portfolio" className="my-4">
      <div className="container">
        <div className="latest-pro-header text-center">
          <p className="mb-0 gray-text">Introduction</p>
          <h1>
            <span className="dark-blue">Latest</span>
            <span className="gray-text">Projects</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12" data-aos="fade-up">
            <h3 className="gray-text">Cadeau Boutique</h3>
            <p className="dark-blue my-1">
              <img src={Image1} className="mx-2" alt="" />
              <span style={{ "vertical-align": "middle" }}>2022</span>
            </p>
            <p className="my-3 latest-pro-text">
              An application for gifts and surprises in Saudi Arabia
            </p>
          </div>

          <div className="col-xl-6 col-md-6 col-sm-12" data-aos="fade-down">
            <div className="position-relative">
              <img className="w-100" src={Image2} alt="" />
              <img
                className="position-absolute top-0 end-0"
                src={Image3}
                style={{ width: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
