import Image1 from "../../images/icons/date-icon.png";
import Image2 from "../../images/latest-projects/img-1.png";
import Image3 from "../../images/latest-projects/img-2.png";
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
            {" "}
            <span className="dark-blue">Latest</span>{" "}
            <span className="gray-text">Projects</span>{" "}
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <h3 className="gray-text">Cadeau Boutique</h3>
            <p className="dark-blue my-1">
              <img src={Image1} className="mx-2" alt="" />
              <span style={{ "vertical-align": "middle" }}>2022</span>
            </p>
            <p className="my-3 latest-pro-text">
              An application for gifts and surprises in Saudi Arabia
            </p>
            <Link
              to="/projects"
              className="btn rounded-pill main-btn"
              style={{ "font-size": "14px" }}
            >
              View Projects
            </Link>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="position-relative">
              <img className="w-100" src={Image2} alt="" />
              <img
                className="position-absolute top-0 end-0"
                src={Image3}
                style={{ width: "80px" }}
              />
            </div>
          </div>

          <div className="col-xl-4 col-sm-12 cadeau">
            <img className="w-100" src={Image3} style={{ height: "70%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
