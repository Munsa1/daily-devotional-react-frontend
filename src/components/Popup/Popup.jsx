// src/components/Popup.jsx
import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.popupContent}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
