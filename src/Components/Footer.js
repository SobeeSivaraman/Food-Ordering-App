import React from "react";
import"../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <div className="footer">
          <a href="/#"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="/#"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="/#"
            className="Twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="/#"
            className="Instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <div className="footer-content">
          <p>&copy; 2022 foodzone.com</p>
          </div>
        </div>
    );
}    
  