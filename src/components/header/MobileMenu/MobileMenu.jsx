import React from "react";
import styles from "./MobileMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`${styles["my-links"]} d-flex ${
          isOpen ? "" : styles.hidden
        } gb-popup-scale-blur`}
      >
        <div className={`${styles["close-btn-container"]} d-flex`}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles["close-btn-style"]}
            onClick={onClose}
          />
        </div>

        <ul className="d-flex">
          <li><a href="#devotion" className="link">Devotion</a></li>
          <li><a href="#aboutUs" className="link">About Us</a></li>
          <li><a href="#contact" className="link">Contact</a></li>
          <li><a href="#videos" className="link">Videos</a></li>
          <li><a href="#audio" className="link">Audio</a></li>
          <li><a href="#donate" className="link">Donate</a></li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${
          isOpen ? "" : styles.hidden
        } gb-popup-scale-blur`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default MobileMenu;
