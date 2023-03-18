import React from "react";
import { logo } from "../assets/images";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="center dark logo-container ">
        <img src={logo} alt="" />
        <h3>
          <span>Leocadio's</span> Event
        </h3>
      </div>

      <div className="contact-information">
        <div className="footer-container">
          <div className="contact-col">
            <FaLocationArrow className="icon" />
            <address>1234 Enchanted Street Santa Rosa, Laguna</address>
          </div>
          <div className="contact-col">
            <FaPhoneAlt className="icon" />
            <p>+63 987-654-3210</p>
          </div>
          <div className="contact-col">
            <FaEnvelope className="icon" />
            <p>info@leocadiosevents.com</p>
          </div>
        </div>

        <div className="footer-container">
          <h5>About the company</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sapiente natus libero molestias provident quibusdam placeat quasi
            earum quos impedit?
          </p>
          <div className="socials-container">
            <a target="_blank" href="https://www.facebook.com/">
              <FaFacebookSquare className="icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <FaInstagram className="icon" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/">
              <FaTiktok className="icon" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <FaTwitter className="icon" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">Copyright &copy; 2023 - Dia Leocadio's Event</p>
    </footer>
  );
};
export default Footer;
