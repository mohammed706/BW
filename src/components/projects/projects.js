import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../images/latest-projects/1.jpg";
import image2 from "../../images/latest-projects/2.jpg";
import image3 from "../../images/latest-projects/3.jpg";
import image4 from "../../images/latest-projects/4.jpg";
import image5 from "../../images/latest-projects/5.jpg";
const Projects = () => {
  const data = [
    {
      id: 1,
      image: `${image1}`,
      name: "Cadeau Boutique"
    },
    { id: 2, image: `${image2}`, name: "Capriani Gelato" },
    { id: 3, image: `${image3}`, name: "Casakai Restaurant" },
    { id: 4, image: `${image4}`, name: "Smart Kids " },
    { id: 5, image: `${image5}`, name: "Iwood" }
  ];
  const ShowProjects = () => {
    return (
      <>
        {data &&
          data.map((item) => {
            return (
              <>
                <div className="col-md-4 col-sm-6 mb-4">
                  <div
                    className="card h-100 text-center p-4 shadow"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5
                        className="card-title mb-0 gray-text"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {item.name}
                      </h5>

                      <NavLink
                        to="/projects"
                        className="btn rounded-pill main-btn mt-3"
                      >
                        View More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };
  return (
    <div id="projects">
      <div className="container">
        <div className="projects-header text-center mx-auto my-5">
          <h1 className="projects-title mb-2">
            Our <span className="gray-text">Projects</span>
          </h1>
          <h6 className="gray-text">
            Not Only Partners But a Set of Delightful Success Stories
            <br />
            We are More Than Happy to have Them as Part of our Family and Wish
            Them a an Everlasting Great Success
          </h6>
        </div>
      </div>
      <div className="row  m-0">{<ShowProjects />}</div>
    </div>
  );
};

export default Projects;
