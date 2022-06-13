import axios from "axios";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { errorAlert, successAlert } from "./../../utils/alert";
// Image
import Image2 from "../../images/get-in-touch/get-touch.png";

const URL = "https://bwsiteendpoint.bw-businessworld.com/";
const Touch = () => {
  AOS.init({
    duration: 1200
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    axios
      .post(`${URL}api/v1/savecontact`, formData, {
        headers: "csrf_token()"
      })
      .then((res) => {
        successAlert();
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;
          if (typeof message === "object") errorAlert(message[0]);
          else errorAlert(message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("err", err.message);
        }
      })
      .finally(() => {
        setName(""), setEmail(""), setSubject(""), setMessage("");
      });
  };
  return (
    <section id="contact" className="">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-md-6 col-sm-12 content-sec"
            data-aos="zoom-in-up"
          >
            <div className="get-in-touch-title mb-5">
              <p className="mb-0 gray-text">Introduction</p>
              <h1>
                <span className="dark-blue">Get</span>
                <span className="gray-text">In Touch</span>
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mb-5">
                <div className="col-xl-6">
                  <label for="name" className="form-label blue-color">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control border-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-6">
                  <label for="email" className="form-label blue-color">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control border-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label for="subject" className="form-label blue-color">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control border-1"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <label for="message" className="form-label blue-color">
                    Message
                  </label>
                  <textarea
                    className="form-control border-1"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="col p-0">
                  <button className="btn submit-btn text-white rounded-pill mt-4 px-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div
            className="col-xl-6 col-md-6 col-sm-12 get-in-touch-img"
            data-aos="fade-down"
          >
            <p className="location">Location, Street, City</p>

            <img className="main-img w-100" src={Image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Touch;
