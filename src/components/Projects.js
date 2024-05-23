import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="yaqOZd">
      <div className="content">
        <h2>Projects</h2>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="card project-card">
              <img
                src="ONLINE_THRIFT_Shopping_STORE_3 (1).webp"
                className="card-img-top"
                alt="online-store"
              />
              <div className="card-body">
                <h5 className="card-title">THRIFTIQUE-ONLINE THRIFT STORE</h5>
                <ul className="card-text">
                  <li>
                    Developed a responsive front end web application using HTML,
                    CSS, and JavaScript.
                  </li>
                  <li>
                    Implemented user authentication functionality that allows
                    users to log in and sell, donate, or buy gently used goods
                    online.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card project-card">
              <img
                src="ONLINE_FOOD_ORDERING_SYSTEM_3D.jpeg"
                className="card-img-top"
                alt="kawaii-french-fries"
              />
              <div className="card-body">
                <h5 className="card-title">
                  HUNGREZY-ONLINE FOOD ORDERING SYSTEM
                </h5>
                <ul className="card-text">
                  <li>
                    Hungrezy-Food Ordering System is a collaborative project
                    developed using MERN stack framework.
                  </li>
                  <li>
                    A common platform for people inside the campus to order food
                    from various restaurants, eliminating long waiting times and
                    confusion of mismatching orders during break hours.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card project-card">
              <img
                src="Human_sentiments_creative_icon.jpeg"
                className="card-img-top"
                alt="fine-print"
              />
              <div className="card-body">
                <h5 className="card-title">
                  SENTIMENT ANALYSIS ON TWEETS AND REDDIT POST{" "}
                </h5>
                <ul className="card-text">
                  <li>
                    Designed a model to classify tweets into positive and
                    negative based on their context and used various
                    visualization techniques to display the results.
                  </li>
                  <li>Used NLTK, TextBlob, and Vader.</li>
                  <li>
                    Dashboard was built using PowerBI, Plotly, and Chart Studio.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
