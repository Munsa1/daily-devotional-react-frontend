import React, { useState, useEffect } from "react";
import Popup from "../Popup/Popup.jsx";
import styles from "./VerseOfTheDay.module.css";
import SocialLinks from "./Socials/SocialLinks.jsx"

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState("");
  const [verseText, setVerseText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetch("https://labs.bible.org/api/?passage=votd&type=json")
      .then((res) => res.json())
      .then((data) => {
        setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse}`);
        setVerseText(data[0].text);
      })
      .catch((err) => console.error("Error fetching verse:", err));
  }, []);

  return (
    <div className={styles.verseBox}>
      <h3>
        {" "}
        <a
          className={`${styles['verse']} left-margin app-color-text-2`}
          onClick={() => setIsPopupOpen(true)}
        >
          {verse}
        </a>
      </h3>
      <div className={`${styles['devotion-paragraph']} left-margin right-margin app-color-text-2 text-size`}>
                Have you ever heard someone deny that Jesus claimed to be God? Such a statement shows a weak understanding of Scripture. Repeatedly, Jesus placed Himself on equal footing with both the Father and the Holy Spirit (John 10:30).
        <br />
        <br />
            Why is it important for us to believe this? Because Jesus did something that had never been done before: He enabled us to see God in a new way. In Colossians 1:15, Paul explains that Jesus is the “image of the invisible God.” No one has ever looked upon the face of the Almighty. In the Old Testament, some people were confronted with God, but they were never able to look fully upon Him in all His glory. In fact, even Moses, who is called a friend of God (Exodus 33:11), could not look directly at His face (Exodus 33:18-23).
        <br />
        <br />
            The reason Jesus came, however, was to bridge the gap between God’s glory and mankind’s sinful nature. In the original Greek text, the word for “image” is directly related to the English word icon and means “likeness, image, or portrait.” As the “icon,” Jesus is the exact, flawless, in-the-flesh representation of God. That’s why He could say, “The one who has seen Me has seen the Father” (John 14:9)
        <br />
            What has Jesus taught you about the Father? Think about how to share that insight with someone today.
      </div>
      
      <div className={`${styles['line-break']} left-margin right-margin`}></div>
      <div className="socials-header">
        <span className={`${styles['socials-header']} app-color-text-2`}>follow us on </span>
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
