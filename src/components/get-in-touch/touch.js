import Image1 from "../../images/get-in-touch/get-in-touch-img.png";
const Touch = () => {
  return (
    <section id="get-in-touch" className="">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="get-in-touch-title mb-5">
              <p className="mb-0 gray-text">Introduction</p>
              <h1>
                <span className="dark-blue">Get</span>
                <span className="gray-text">In Touch</span>
              </h1>
            </div>
            <form action="/">
              <div className="row mb-5">
                <div className="col-xl-6">
                  <label for="first-name" className="form-label blue-color">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="form-control border-0"
                  />
                </div>
                <div className="col-xl-6">
                  <label for="last-name" className="form-label blue-color">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="form-control border-0"
                  />
                </div>
                <div className="my-3">
                  <label for="email" className="form-label blue-color">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control border-0"
                  />
                </div>
                <div className="">
                  <label for="message" className="form-label blue-color">
                    Message
                  </label>
                  <textarea
                    className="form-control border-0"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
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

          <div className="col-xl-6 col-md-6 col-sm-12 get-in-touch-img">
            <img className="w-100" src={Image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Touch;
