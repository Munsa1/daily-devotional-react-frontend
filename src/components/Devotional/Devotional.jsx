import styles from "./devotional.module.css";

const Devotional = () => {
  return (
    <section className={styles.devotional} id="devotion">
      <h1 className={`left-margin app-color-1 ${styles["devotional-heading"]}`}>
        Daily Devotion
      </h1>

      <h2 className="left-margin app-color-text-2">God's Patience</h2>

      <p className="left-margin app-color-text-2 text-size">
        God is slow to anger and gives us time to repent. But he loves us too
        much to let us continue in sin
      </p>

      <span className="left-margin app-color-text-2" id="devotionDate">
        Devotional date
      </span>

      <div className={`left-margin right-margin ${styles["line-break"]}`}></div>
    </section>
  );
};

export default Devotional;
