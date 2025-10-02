import React, { useEffect, useState } from "react";
import styles from "./OtherDevotions.module.css";

const OtherDevotions = () => {
  const [devotions, setDevotions] = useState([]);

  // Simulate fetching data (replace with real API later)
  useEffect(() => {
    const fetchDevotions = async () => {
      try {
        // Dummy JSON (could later come from your backend)
        const data = [
          {
            id: 1,
            title: "Faith Over Fear",
            text: "Trust in God’s plan, even when the path is unclear.",
            image: "images/italy street.webp",
          },
          {
            id: 2,
            title: "Grace Renewed",
            text: "Each day is a new chance to walk in God’s grace.",
            image: "../images/italy street.webp",
          },
          {
            id: 3,
            title: "Peace in Prayer",
            text: "Find rest for your soul through prayer and devotion.",
            image: "images/italy street.webp",
          },
        ];
        // Pretend it takes time
        setTimeout(() => setDevotions(data), 1000);
      } catch (err) {
        console.error("Error fetching devotions:", err);
      }
    };

    fetchDevotions();
  }, []);

  return (
    <section className={`${styles["other-devotions"]} d-flex`}>
      <h2>See All Past Devotions</h2>
      <div className={styles["underline-past-devotions"]}></div>

      <div className={`${styles["devotions-card-holder"]} d-flex`}>
        <div className={`${styles["devotions-card-container"]} d-flex`}>
          {devotions.length === 0 ? (
            <p className="app-color-text-2">Loading devotions...</p>
          ) : (
            devotions.map((devotion) => (
              <div
                key={devotion.id}
                className={`${styles["devotions-card"]} d-flex left-margin right-margin`}
              >
                <img src={devotion.image} alt={devotion.title} />
                <div className={styles["card-text"]}>
                  <h3 className="app-color-text-2">{devotion.title}</h3>
                  <p className="app-color-text-2">{devotion.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <button className={styles["see-all-button"]}>
          See all other devotions
        </button>
      </div>
    </section>
  );
};

export default OtherDevotions;
