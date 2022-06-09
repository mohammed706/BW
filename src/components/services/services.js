import image1 from "../../images/icons/phone-icon.png";
import image2 from "../../images/icons/painting.png";
import image3 from "../../images/icons/server.svg";
import image4 from "../../images/icons/phone-icon.png";
import image5 from "../../images/backgrounds/services-bg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import "../../main.css";
import React from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    image: `${image1}`,
    title: "Web and App Development",
    desc: "Exceptional quality and on time delivery Quality first and foremost.Through extensive inspection and testing"
  },
  {
    id: 2,
    image: `${image2}`,
    title: "Digital Marketing Services",
    desc: "We are committed to monitoring all solutions according to clear criteria and indicators to measure"
  },
  {
    id: 3,
    image: `${image4}`,
    title: "Consulting",
    desc: "BW offers a wide range of consulting services for various types of companies and at all management levels,Making strategic plans "
  },
  {
    id: 4,
    image: `${image4}`,
    title: "User Interface Design",
    desc: "Providing attractive designs that are compatible with the technical environment has undoubtedly become an indispensable thing in the world of web and smartphone applications"
  },
  {
    id: 5,
    image: `${image4}`,
    title: "graphic design",
    desc: "At BW, we provide all design services accompanying business growth at all stages from inception to the jubilee celebrations. We work in an integrated manner with all digital platforms"
  },
  {
    id: 6,
    image: `${image4}`,
    title: "DevOps Hosting Services",
    desc: "  We save and store website data completely on our large mainframe computers with special specifications and high internet speed, and we work under DevOps system to automate operations quickly"
  }
];
const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services-header text-center mx-auto my-5">
            <p className="gray-text mb-0">Introduction</p>
            <h1 className="services-title">
              Our <span className="gray-text">Services</span>
            </h1>
          </div>

          <div className="grid-container">
            <div className="row gx-4 gy-5">
              {data &&
                data.map((item) => (
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card shadow-lg" key={item.id}>
                      <div className="card-body">
                        <h5 className="card-title mb-4">
                          <img
                            src={item.image}
                            className="me-2"
                            alt={item.title}
                          />
                          {item.title}
                        </h5>
                        <p className="card-text gray-text">
                          {item.desc.substring(0, 100)}...
                        </p>
                        <Link
                          to="#"
                          className="btn card-button"
                          // style={{ font-size :"14px"}}
                        >
                          Learn More
                          <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <div className="grid-container">
            <div className="row gx-4 gy-5">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image1} className="me-2" alt="Mobile icon" />
                      Website and Application Development:
                    </h5>
                    <p className="card-text gray-text">
                      Exceptional quality and on time delivery Quality first and
                      foremost. Through extensive inspection and testing...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button"
                      // style={{ font-size :"14px"}}
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg ">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image2} className="me-2" alt="Mobile icon" />
                      Digital Marketing Services:
                    </h5>
                    <p className="card-text gray-text">
                      We are committed to monitoring all solutions according to
                      clear criteria and indicators to measure ...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button"
                      // style="font-size: 14px"
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image3} className="me-2" alt="Mobile icon" />
                      Consulting
                    </h5>
                    <p className="card-text gray-text">
                      BW offers a wide range of consulting services for various
                      types of companies and at all management levels,Making
                      strategic plans ...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button"
                      // style="font-size: 14px"
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image4} className="me-2" alt="Mobile icon" />
                      User Interface Design
                    </h5>
                    <p className="card-text gray-text">
                      Providing attractive designs that are compatible with the
                      technical environment has undoubtedly become an
                      indispensable thing in the world of web and smartphone
                      applications...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button"
                      // style="font-size: 14px"
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image2} className="me-2" alt="Mobile icon" />
                      graphic design
                    </h5>
                    <p className="card-text gray-text">
                      At BW, we provide all design services accompanying
                      business growth at all stages from inception to the
                      jubilee celebrations. We work in an integrated manner with
                      all digital platforms...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button "
                      // style="font-size: 14px"
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image3} className="me-2" alt="Mobile icon" />
                      DevOps Hosting Services
                    </h5>
                    <p className="card-text gray-text">
                      We save and store website data completely on our large
                      mainframe computers with special specifications and high
                      internet speed, and we work under DevOps system to
                      automate operations quickly...
                    </p>
                    <Link
                      to="#"
                      className="btn card-button"
                      // style="font-size: 14px"
                    >
                      Learn More
                      <i className="bi bi-arrow-right mx-1 dark-blue"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <img className="services-bg" src={image5} />
        </div>
      </section>
    </>
  );
};
export default Services;
