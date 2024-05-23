import React from "react";
import "../Education.css"; // Ensure the path is correct

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="content">
        <h2>Education</h2>
        <div className="education-card">
          <div className="institution-image">
            <img
              src="vit_logo.png
            "
              alt="VIT Vellore"
            />
          </div>
          <div className="institution-details">
            <h3>
              <b>VIT, Vellore</b>
            </h3>
            <p>
              <b>M.Tech Integrated Computer Science (MIC)</b>
            </p>
            <p>
              <b>2019 - 2024</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
