import { Link } from "react-router-dom";
// Images
import Image1 from "../../images/logo/logo-white.png";
import Image2 from "../../images/icons/insta.png";
import Image3 from "../../images/icons/face.png";
import Image4 from "../../images/icons/twit.png";
import Image5 from "../../images/icons/Group 138.png";
import Image6 from "../../images/icons/Vector.png";
import Image7 from "../../images/icons/linkedin.svg";
const Footer = () => {
  return (
    <section className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="info">
              <img src={Image1} width="100px" alt="" />
              <ul className="social-media d-flex mt-3 list-unstyled gap-3">
                <li>
                  <a
                    className="social-Link d-block text-light"
                    href="https://www.instagram.com/wordbw/"
                    target="_blank"
                  >
                    <img className="social" src={Image2} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    className="social-Link d-block text-light"
                    href="https://www.facebook.com/bw.businessworldcom/"
                    target="_blank"
                  >
                    <img className="social" src={Image3} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    className="social-Link d-block text-light"
                    href="https://twitter.com/bwworld6"
                    target="_blank"
                  >
                    <img className="social" src={Image4} alt="" />
                  </a>
                </li>

                <li>
                  <Link
                    className="social-Link d-block text-light "
                    to="#"
                  ></Link>
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
                    href="info@bw-businessworld.com"
                    target="_blank"
                  >
                    <img className="p-1" src={Image5} alt="" />
                    info@bw-businessworld.com
                  </a>
                </li>
                <li>
                  <a
                    className="contact-links text-decoration-none text-light"
                    href="https://bw-businessworld.com/"
                    target="_blank"
                  >
                    <i className="bi bi-globe p-1"></i>
                    www.bw-businessworld.com
                  </a>
                </li>
                <li>
                  <a
                    className="contact-links text-decoration-none text-light"
                    href="#"
                  >
                    <img className="p-1" src={Image6} alt="" />
                    +966 549 344 449
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li>
                  <Link className="link-item">Our values</Link>
                </li>
                <li>
                  <Link className="link-item">Our vision</Link>
                </li>
                <li>
                  <Link className="link-item">Latest news</Link>
                </li>
                <li>
                  <Link className="link-item">Get in touch</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <h5 className="text-light">Services</h5>
              <ul className="list-unstyled lh-lg">
                <li>
                  <Link className="link-item">Book appointment</Link>
                </li>
                <li>
                  <Link className="link-item">Free Consultation</Link>
                </li>
                <li>
                  <Link className="link-item">Frequently Asked Questions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="links">
              <ul className="list-unstyled lh-lg">
                <li>
                  <Link className="link-item">Terms & Conditions</Link>
                </li>
                <li>
                  <Link className="link-item">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
