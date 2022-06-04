import Image1 from "../../images/icons/date-icon.png";
import Image2 from "../../images/latest-projects/img-1.png";
import Image3 from "../../images/latest-projects/img-2.png";
const Projects = () => {
  return (
    <section id="latest-projects" className="my-4">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              officiis praesentium asperiores.
            </p>
            <a
              href="#"
              className="btn blue-color"
              style={{ "font-size": "14px" }}
            >
              Learn More
              <i className="bi bi-arrow-right mx-1 dark-blue"></i>
            </a>
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
export default Projects;
