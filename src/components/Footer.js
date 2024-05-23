import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Akshitha Prakash. All rights reserved.</p>
        <ul className="socials">
          <li>
            <a href="https://github.com/Akshitha-Prakash">
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/3d-fluency/94/github.png"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="social.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akshitha-prakash-5b260b1ba/">
              <img src="linkedin (4).png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
