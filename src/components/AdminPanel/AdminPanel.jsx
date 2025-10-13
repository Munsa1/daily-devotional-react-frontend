
import React, { useState, useEffect } from "react";
import styles from "../AdminPanel/Admin.module.css";

const AdminPanel = () => {
  const [verse, setVerse] = useState("");
  const [devotional, setDevotional] = useState("");
  const [message, setMessage] = useState("");

  // Save devotional to localStorage
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!verse || !devotional) {
    setMessage("Please fill in both fields.");
    return;
  }

  const newDevotional = {
    verse,
    devotional,
    date: new Date().toISOString(),
  };

  try {
    const response = await fetch("http://localhost:5000/devotion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDevotional),
    });

    if (!response.ok) {
      throw new Error("Failed to save devotional.");
    }

    const data = await response.json();
    setMessage("✅ Devotional saved successfully to backend!");
    setVerse("");
    setDevotional("");
  } catch (error) {
    console.error(error);
    setMessage("❌ Error saving devotional. Please try again.");
  }
};


  // Check existing devotional
  useEffect(() => {
    const saved = localStorage.getItem("currentDevotional");
    if (saved) {
      const parsed = JSON.parse(saved);
      setMessage(`Last saved devotional: ${parsed.verse} (${parsed.date})`);
    }
  }, []);

  return (
    <div className={styles.adminPanel}>
      <h2>Add New Devotional</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Verse Reference (e.g., John 3:16)</label>
        <input
          type="text"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="Enter verse (e.g., Psalm 23:1)"
        />

        <label>Devotional Message</label>
        <textarea
          value={devotional}
          onChange={(e) => setDevotional(e.target.value)}
          placeholder="Write your devotional message here..."
          rows={5}
        />

        <button type="submit">Save Devotional</button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default AdminPanel;
