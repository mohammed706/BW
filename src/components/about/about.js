import Image1 from "../../images/about-us/img-1.png";
import Image2 from "../../images/about-us/img-2.png";
import Image3 from "../../images/about-us/img-3.png";
import React from "react";
import { Row, Col } from "reactstrap";
import "../../main.css";
const About = () => {
  return (
    <>
      <section id="about-us">
        <div className="container">
          <Row>
            <Col md={6} className="px-3">
              <div className="about-imgs">
                <img className="middle-img shadow" src={Image1} alt="" />
                <img className="top-img shadow" src={Image2} alt="" />
                <img className="bottom-img shadow" src={Image3} alt="" />
              </div>
            </Col>
            <Col md={6} className="px-3">
              <div className="title-container my-auto">
                <p className="mb-0">Introduction</p>
                <h1 className="about-us-title">
                  <span className="dark-blue">About</span>
                  <span className="gray-text">Us</span>
                </h1>
              </div>
              <div
                className="about-us-text gray-text"
                style={{ "margin-bottom": "50px" }}
              >
                <h5>Lorem ipsum is placeholder text</h5>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual
                </p>
              </div>
              <div
                className="about-us-text gray-text"
                style={{ "margin-bottom": "50px" }}
              >
                <h5>Lorem ipsum is placeholder text</h5>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual
                </p>
              </div>
              <div
                className="about-us-text gray-text"
                style={{ "margin-bottom": "50px" }}
              >
                <h5>Lorem ipsum is placeholder text</h5>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default About;
