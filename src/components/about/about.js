import Image1 from "../../images/about-us/img-1.png";
import Image2 from "../../images/about-us/img-2.png";
import Image3 from "../../images/about-us/img-3.png";
import React from "react";
import { Row, Col } from "reactstrap";
import "../../main.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    duration: 1200
  });

  return (
    <>
      <section id="about-us">
        <div className="container">
          <Row>
            <Col md={6} sm={12} className="px-3" data-aos="fade-up">
              <div className="about-imgs">
                <img className="middle-img shadow" src={Image1} alt="" />
                <img className="top-img shadow" src={Image2} alt="" />
                <img className="bottom-img shadow" src={Image3} alt="" />
              </div>
            </Col>
            <Col
              md={6}
              sm={12}
              className="desc-section px-3"
              data-aos="fade-down"
            >
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
                <h5>Vision:</h5>
                <p>
                  We see ourselves as a cornerstone of the success of the
                  institutions we work with and a technology incubator to
                  present their business in the best way in the world. We will
                  be a destination for all emerging and established companies to
                  improve their performance and digital presence.
                </p>
              </div>
              <div
                className="about-us-text gray-text"
                style={{ "margin-bottom": "50px" }}
              >
                <h5>Mission:</h5>
                <p>
                  Participate in building and developing the business community
                  by providing integrated smart systems according to the best
                  international standards.
                </p>
              </div>
              <div
                className="about-us-text gray-text"
                style={{ "margin-bottom": "50px" }}
              >
                <h5>Our goals:</h5>
                <p>
                  - Recognizing us as one of the best technical service
                  providers in the Kingdom of Saudi Arabia by 2025.
                </p>
                <p>
                  - Develop advanced solutions in the field of information
                  technology by understanding market needs and effectively
                  meeting them.
                </p>
                <p>
                  - To be the main destination for business owners to develop
                  their digital presence and enhance their marketing activities.
                </p>
                <p>
                  - Adopting international standards of quality and presenting
                  them in our business at competitive prices.
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
