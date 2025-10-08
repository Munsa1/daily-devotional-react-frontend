// import React, { useState } from "react";
// import styles from "./AdminPanel.module.css";

// const AdminPanel = () => {
//   const [verse, setVerse] = useState("");
//   const [devotion, setDevotion] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!verse || !devotion) {
//       setStatus("Please fill in both fields.");
//       return;
//     }

//     // Store data locally for now (simulating backend)
//     const newDevotion = {
//       verse,
//       devotion,
//       date: new Date().toISOString(),
//     };

//     localStorage.setItem("latestDevotion", JSON.stringify(newDevotion));
//     setStatus("Devotion saved successfully!");

//     setVerse("");
//     setDevotion("");
//   };

//   return (
//     <div className={styles.adminContainer}>
//       <h2>Add New Devotion</h2>
//       <form onSubmit={handleSubmit} className={styles.adminForm}>
//         <div className={styles.formGroup}>
//           <label>Verse Reference</label>
//           <input
//             type="text"
//             value={verse}
//             onChange={(e) => setVerse(e.target.value)}
//             placeholder="e.g. John 3:16"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label>Devotion Text</label>
//           <textarea
//             rows="8"
//             value={devotion}
//             onChange={(e) => setDevotion(e.target.value)}
//             placeholder="Write the devotion message here..."
//           ></textarea>
//         </div>

//         <button type="submit" className={styles.saveButton}>
//           Save Devotion
//         </button>

//         {status && <p className={styles.status}>{status}</p>}
//       </form>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import styles from "../AdminPanel/Admin.module.css";

const AdminPanel = () => {
  const [verse, setVerse] = useState("");
  const [devotional, setDevotional] = useState("");
  const [message, setMessage] = useState("");

  // Save devotional to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verse || !devotional) {
      setMessage("Please fill in both fields.");
      return;
    }

    const newDevotional = {
      verse,
      devotional,
      date: new Date().toLocaleDateString(),
    };

    // Save to localStorage
    localStorage.setItem("currentDevotional", JSON.stringify(newDevotional));
    setMessage("✅ Devotional saved successfully!");
    setVerse("");
    setDevotional("");
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
