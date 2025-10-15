// import styles from "./devotional.module.css";

// const Devotional = () => {
//   return (
//     <section className={styles.devotional} id="devotion">
//       <h1 className={`left-margin app-color-1 ${styles["devotional-heading"]}`}>
//         Daily Devotion
//       </h1>

//       <h2 className="left-margin app-color-text-2">God's Patience</h2>

//       <p className="left-margin app-color-text-2 text-size">
//         God is slow to anger and gives us time to repent. But he loves us too
//         much to let us continue in sin
//       </p>

//       <span className="left-margin app-color-text-2" id="devotionDate">
//         Devotional date
//       </span>

//       <div className={`left-margin right-margin ${styles["line-break"]}`}></div>
//     </section>
//   );
// };

// export default Devotional;
import { useState, useEffect } from "react";
import styles from "./devotional.module.css";

const Devotional = () => {
  const [devotion, setDevotion] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevotion = async () => {
      try {
        const response = await fetch("http://localhost:5000/devotion/latest");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDevotion(data);
      } catch (err) {
        console.error("❌ Error fetching devotional:", err);
        setError("Unable to load the daily devotion. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDevotion();
  }, []);

  if (loading) {
    return (
      <section className={styles.devotional}>
        <h1 className={`left-margin app-color-1 ${styles["devotional-heading"]}`}>
          Daily Devotion
        </h1>
        <p className="left-margin app-color-text-2">Loading devotion...</p>
      </section>
    );
  }

  if (error || !devotion) {
    return (
      <section className={styles.devotional}>
        <h1 className={`left-margin app-color-1 ${styles["devotional-heading"]}`}>
          Daily Devotion
        </h1>
        <p className="left-margin app-color-text-2">{error}</p>
      </section>
    );
  }

  return (
    <section className={styles.devotional} id="devotion">
      <h1 className={`left-margin app-color-1 ${styles["devotional-heading"]}`}>
        Daily Devotion
      </h1>

      <h2 className="left-margin app-color-text-2">{devotion.title}</h2>

      <p className="left-margin app-color-text-2 text-size">
        {devotion.bodyText}
      </p>

      <span className="left-margin app-color-text-2" id="devotionDate">
        📖 {devotion.bibleVerse} — {new Date(devotion.date).toLocaleDateString()}
      </span>

      <div className={`left-margin right-margin ${styles["line-break"]}`}></div>
    </section>
  );
};

export default Devotional;
