import Image1 from "../../images/logo/logo-white.png";
import Image2 from "../../images/icons/insta.png";
import Image3 from "../../images/icons/face.png";
import Image4 from "../../images/icons/twit.png";
import Image5 from "../../images/icons/Group 138.png";
import Image6 from "../../images/icons/Vector.png";
const Footer = () => {
  return (
    <section className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="info">
              <img src={Image1} width="100px" alt="" />
              <ul className="d-flex mt-3 list-unstyled gap-3">
                <li>
                  <a className="social-Link d-block text-light" href="#">
                    <img className="social" src={Image2} alt="" />
                  </a>
                </li>
                <li>
                  <a className="social-Link d-block text-light" href="#">
                    <img className="social" src={Image3} alt="" />
                  </a>
                </li>
                <li>
                  <a className="social-Link d-block text-light" href="#">
                    <img className="social" src={Image4} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <h5 className="text-light">Contact Us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Location</li>
                <li>
                  <a
                    className="contact-links text-decoration-none text-light"
                    href="#"
                  >
                    <img className="p-1" src={Image5} alt="" />
                    email@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="contact-links text-decoration-none text-light"
                    href="#"
                  >
                    <img className="p-1" src={Image6} alt="" />
                    0000 2233 5648
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li>Our values</li>
                <li>Our vision</li>
                <li>Latest news</li>
                <li>Get in touch</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <h5 className="text-light">Services</h5>
              <ul className="list-unstyled lh-lg">
                <li>Book appointment</li>
                <li>Free Consultation</li>
                <li>Frequently Asked Questions</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <ul className="list-unstyled lh-lg">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
