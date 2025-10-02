// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // make sure you put your CSS into Footer.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="aboutUs">
      <div className="footer-container">
        <div className="footer-wrap d-flex">
          <div className="footer">
            <a href="/" className="white left-margin church-name-footer">
              Church Name
            </a>
            <div className="accordion"></div>
            <p className="footer-address left-margin white">
              5537, Luanginga Rd <br />
              Kalundu <br />
              Lusaka
            </p>
            <a
              href="tel:0966641813"
              className="left-margin white footer-number footer-links"
            >
              Call us on: 0966641813
            </a>
            <ul className="footer-icons d-flex left-margin right-margin">
              <li>
                <a
                  href="https://web.facebook.com/munsa.mibenge.9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/MibengeMunsa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@munsamibenge6307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/munsa-mibenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="white" />
                </a>
              </li>
            </ul>
            <p className="copyright-tag left-margin white right-margin">
              &copy; copyright 2024. All rights reserved{" "}
              <a href="/" className="footer-links">
                www.churchname.com
              </a>
              . Church grants permission to print for personal use only. Be sure
              to take a look at our{" "}
              <a href="#" className="footer-links">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="footer-links">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="footer-links">
                Governance Information
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
