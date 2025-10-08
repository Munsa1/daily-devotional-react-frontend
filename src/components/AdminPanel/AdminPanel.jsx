import React, { useState } from "react";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const [verse, setVerse] = useState("");
  const [devotion, setDevotion] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verse || !devotion) {
      setStatus("Please fill in both fields.");
      return;
    }

    // Store data locally for now (simulating backend)
    const newDevotion = {
      verse,
      devotion,
      date: new Date().toISOString(),
    };

    localStorage.setItem("latestDevotion", JSON.stringify(newDevotion));
    setStatus("Devotion saved successfully!");

    setVerse("");
    setDevotion("");
  };

  return (
    <div className={styles.adminContainer}>
      <h2>Add New Devotion</h2>
      <form onSubmit={handleSubmit} className={styles.adminForm}>
        <div className={styles.formGroup}>
          <label>Verse Reference</label>
          <input
            type="text"
            value={verse}
            onChange={(e) => setVerse(e.target.value)}
            placeholder="e.g. John 3:16"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Devotion Text</label>
          <textarea
            rows="8"
            value={devotion}
            onChange={(e) => setDevotion(e.target.value)}
            placeholder="Write the devotion message here..."
          ></textarea>
        </div>

        <button type="submit" className={styles.saveButton}>
          Save Devotion
        </button>

        {status && <p className={styles.status}>{status}</p>}
      </form>
    </div>
  );
};

export default AdminPanel;
