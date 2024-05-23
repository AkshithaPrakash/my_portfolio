import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    continuousTypeWriter("SOFTWARE ENGINEER", 0);
  }, []);

  const continuousTypeWriter = (text, i) => {
    setTimeout(() => {
      typeWriter(text, i % text.length, () => {
        continuousTypeWriter(text, i + 1);
      });
    }, 1000); // 1000 milliseconds = 1 second
  };

  const typeWriter = (text, i, cb) => {
    if (i < text.length) {
      document.getElementById("typing").innerHTML = text.substring(0, i + 1);
      setTimeout(() => {
        typeWriter(text, i + 1, cb);
      }, 50); // Typing speed: 50 milliseconds
    } else {
      if (cb) cb();
    }
  };

  return (
    <section id="about" className="yaqOZd">
      <div className="content">
        <div className="t3iYD">
          <img src="main_pic.jpg" alt="Profile Picture" />
        </div>
        <p>
          <b></b>
          <span id="typing"></span>
        </p>
        <h2>About Me</h2>
        <p className="about-me-text">
          I code, I detect bugs 🐞 and code a bit more .. <br />
          As a final year student pursuing my integrated M.Tech in Computer
          Science at VIT Vellore, I am deeply passionate about software
          development and eager to delve into real-world applications. With a
          curious mind and excitement to apply my skills, I am ready to
          contribute to the ever-evolving tech landscape. Let's connect and
          explore opportunities together!
        </p>
      </div>
    </section>
  );
};

export default About;
