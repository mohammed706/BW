import image1 from "../../images/icons/phone-icon.png";
import image2 from "../../images/icons/painting.png";
import image3 from "../../images/icons/doc.png";
import image4 from "../../images/icons/phone-icon.png";
import image5 from "../../images/backgrounds/services-bg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import "../../main.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

          <Router className="grid-container">
            <div className="row gx-4 gy-5">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image1} className="me-2" alt="Mobile icon" />
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      <img src={image2} className="me-2" alt="Mobile icon" />
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
                      Software Development
                    </h5>
                    <p className="card-text gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis nam, eaque deserunt pariatur
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
          </Router>
          <img className="services-bg" src={image5} />
        </div>
      </section>
    </>
  );
};
export default Services;
