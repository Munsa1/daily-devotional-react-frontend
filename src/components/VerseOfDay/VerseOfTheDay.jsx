

import React, { useState, useEffect } from "react";
import Popup from "../Popup/Popup.jsx";
import styles from "./VerseOfTheDay.module.css";
import SocialLinks from "./Socials/SocialLinks.jsx";

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState("");
  const [verseText, setVerseText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

useEffect(() => {
  fetch("http://localhost:5000/devotion/latest")
    .then((res) => res.json())
    .then((data) => {
      if (data && data.verse && data.message) {
        setVerse(data.verse);
        setVerseText(data.message);
      } else {
        // fallback if backend is empty
        fetch("https://labs.bible.org/api/?passage=votd&type=json")
          .then((res) => res.json())
          .then((apiData) => {
            setVerse(`${apiData[0].bookname} ${apiData[0].chapter}:${apiData[0].verse}`);
            setVerseText(apiData[0].text);
          });
      }
    })
    .catch((err) => console.error("Error fetching devotional:", err));
}, []);


  return (
    <div className={styles.verseBox}>
      <h3>
        <a
          className={`${styles["verse"]} left-margin app-color-text-2`}
          onClick={() => setIsPopupOpen(true)}
        >
          {verse}
        </a>
      </h3>

      <div
        className={`${styles["devotion-paragraph"]} left-margin right-margin app-color-text-2 text-size`}
      >
        {verseText}
      </div>

      <div className={`${styles["line-break"]} left-margin right-margin`}></div>
      <div className="socials-header">
        <span className={`${styles["socials-header"]} app-color-text-2`}>
          follow us on{" "}
        </span>
      </div>

      <SocialLinks />

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>{verse}</h2>
        <p>{verseText}</p>
      </Popup>
    </div>
  );
};

export default VerseOfTheDay;
