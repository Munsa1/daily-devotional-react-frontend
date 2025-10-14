import React, { useState, useEffect } from "react";
import Popup from "../Popup/Popup.jsx";
import styles from "./VerseOfTheDay.module.css";
import SocialLinks from "./Socials/SocialLinks.jsx";

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState("");
  const [verseText, setVerseText] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); // 🆕 new state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevotional = async () => {
      try {
        const res = await fetch("http://localhost:5000/devotion/latest");

        if (res.ok) {
          const data = await res.json();

          if (data && data.scripture && data.message) {
            setVerse(data.scripture);
            setVerseText(data.message);
            setTitle(data.title || "Verse of the Day");

            // Format and display the createdAt date
            if (data.createdAt) {
              const formatted = new Date(data.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              setDate(formatted);
            }

            setLoading(false);
            return;
          }
        }

        // 🔁 fallback to external API if no backend data
        const apiRes = await fetch("https://labs.bible.org/api/?passage=votd&type=json");
        const apiData = await apiRes.json();

        if (apiData && apiData.length > 0) {
          setVerse(`${apiData[0].bookname} ${apiData[0].chapter}:${apiData[0].verse}`);
          setVerseText(apiData[0].text);
          setTitle("Bible Verse of the Day");
          setDate(""); // no date for fallback
        }
      } catch (err) {
        console.error("Error fetching devotional:", err);
        setVerse("Error loading verse");
        setVerseText("Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDevotional();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading devotional...</p>;
  }

  return (
    <div className={styles.verseBox}>
      <h3 className={styles.title}>{title}</h3>

      {date && <p className={styles.date}>📅 {date}</p>}

      <h4>
        <a
          className={`${styles["verse"]} left-margin app-color-text-2`}
          onClick={() => setIsPopupOpen(true)}
        >
          {verse}
        </a>
      </h4>

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

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>{verse}</h2>
        <p>{verseText}</p>
        {date && <small>📅 {date}</small>}
      </Popup>
    </div>
  );
};

export default VerseOfTheDay;
