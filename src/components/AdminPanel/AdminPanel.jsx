
// import React, { useState, useEffect } from "react";
// import styles from "../AdminPanel/Admin.module.css";

// const AdminPanel = () => {
//   const [verse, setVerse] = useState("");
//   const [devotional, setDevotional] = useState("");
//   const [message, setMessage] = useState("");

//   // Save devotional to localStorage
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!verse || !devotional) {
//     setMessage("Please fill in both fields.");
//     return;
//   }

//   const newDevotional = {
//     verse,
//     devotional,
//     date: new Date().toISOString(),
//   };

//   try {
//     const response = await fetch("http://localhost:5000/devotion", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newDevotional),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to save devotional.");
//     }

//     const data = await response.json();
//     setMessage("✅ Devotional saved successfully to backend!");
//     setVerse("");
//     setDevotional("");
//   } catch (error) {
//     console.error(error);
//     setMessage("❌ Error saving devotional. Please try again.");
//   }
// };


//   // Check existing devotional
//   useEffect(() => {
//     const saved = localStorage.getItem("currentDevotional");
//     if (saved) {
//       const parsed = JSON.parse(saved);
//       setMessage(`Last saved devotional: ${parsed.verse} (${parsed.date})`);
//     }
//   }, []);

//   return (
//     <div className={styles.adminPanel}>
//       <h2>Add New Devotional</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label>Verse Reference (e.g., John 3:16)</label>
//         <input
//           type="text"
//           value={verse}
//           onChange={(e) => setVerse(e.target.value)}
//           placeholder="Enter verse (e.g., Psalm 23:1)"
//         />

//         <label>Devotional Message</label>
//         <textarea
//           value={devotional}
//           onChange={(e) => setDevotional(e.target.value)}
//           placeholder="Write your devotional message here..."
//           rows={5}
//         />

//         <button type="submit">Save Devotional</button>
//       </form>

//       {message && <p className={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default AdminPanel;
















// import React, { useState } from "react";
// import styles from "../AdminPanel/Admin.module.css";

// const AdminPanel = () => {
//   const [title, setTitle] = useState("");
//   const [verse, setVerse] = useState("");
//   const [devotional, setDevotional] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Save devotional to backend
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!verse || !devotional) {
//   //     setMessage("⚠️ Please fill in both the verse and devotional message.");
//   //     return;
//   //   }

//   //   const newDevotional = {
//   //     title: title || "Daily Devotional",
//   //     scripture: verse,
//   //     message: devotional,
//   //     date: new Date().toISOString(),
//   //   };

//   //   try {
//   //     setLoading(true);
//   //     setMessage("Saving devotional...");

//   //     const response = await fetch("http://localhost:5000/devotion", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(newDevotional),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error(`Failed to save devotional (${response.status})`);
//   //     }

//   //     const data = await response.json();
//   //     console.log("Saved:", data);

//   //     setMessage("✅ Devotional saved successfully!");
//   //     setTitle("");
//   //     setVerse("");
//   //     setDevotional("");
//   //   } catch (error) {
//   //     console.error("Error saving devotional:", error);
//   //     setMessage("❌ Error saving devotional. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!verse || !devotional) {
//     setMessage("Please fill in both fields.");
//     return;
//   }

//   const newDevotional = {
//     title: verse, // Using verse as title (optional, or add a title input)
//     verse,
//     message: devotional,
//   };

//   try {
//     const response = await fetch("http://localhost:5000/devotion", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newDevotional),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Error response:", errorText);
//       throw new Error("Failed to save devotional");
//     }

//     const data = await response.json();
//     console.log("✅ Saved:", data);
//     setMessage("✅ Devotional saved successfully!");
//     setVerse("");
//     setDevotional("");
//   } catch (error) {
//     console.error("Error saving devotional:", error);
//     setMessage("❌ Error saving devotional. Please try again.");
//   }
// };


//   return (
//     <div className={styles.adminPanel}>
//       <h2>Add New Devotional</h2>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label>Devotional Title (Optional)</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter a title (e.g., Faith in Action)"
//         />

//         <label>Verse Reference (e.g., John 3:16)</label>
//         <input
//           type="text"
//           value={verse}
//           onChange={(e) => setVerse(e.target.value)}
//           placeholder="Enter verse (e.g., Psalm 23:1)"
//         />

//         <label>Devotional Message</label>
//         <textarea
//           value={devotional}
//           onChange={(e) => setDevotional(e.target.value)}
//           placeholder="Write your devotional message here..."
//           rows={6}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Saving..." : "Save Devotional"}
//         </button>
//       </form>

//       {message && <p className={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default AdminPanel;







// import React, { useState } from "react";

// const AdminPanel = () => {
//   const [title, setTitle] = useState("");
//   const [bibleVerse, setBibleVerse] = useState("");
//   const [bodyText, setBodyText] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newDevotion = { title, bibleVerse, bodyText };

//     try {
//       const response = await fetch("http://localhost:5000/devotion", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newDevotion),
//       });

//       if (!response.ok) throw new Error("Failed to save devotion");

//       const data = await response.json();
//       setMessage(`✅ ${data.message}`);
//       setTitle("");
//       setBibleVerse("");
//       setBodyText("");
//     } catch (error) {
//       console.error(error);
//       setMessage("❌ Error saving devotion");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "sans-serif" }}>
//       <h2>Add New Devotion</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title</label>
//         <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />

//         <label>Bible Verse</label>
//         <input
//           value={bibleVerse}
//           onChange={(e) => setBibleVerse(e.target.value)}
//           placeholder="Enter Bible verse (e.g. John 3:16)"
//         />

//         <label>Body Text</label>
//         <textarea
//           value={bodyText}
//           onChange={(e) => setBodyText(e.target.value)}
//           placeholder="Write your devotion..."
//           rows="5"
//         />

//         <button type="submit">Save Devotion</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AdminPanel;



// import React, { useState } from "react";

// const AdminPanel = () => {
//   const [title, setTitle] = useState("");
//   const [bibleVerse, setBibleVerse] = useState("");
//   const [bodyText, setBodyText] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newDevotion = { title, bibleVerse, bodyText };

//     try {
//       const response = await fetch("http://localhost:5000/devotion", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newDevotion),
//       });

//       if (!response.ok) throw new Error("Failed to save devotion");

//       const data = await response.json();
//       setMessage(`✅ ${data.message}`);
//       setTitle("");
//       setBibleVerse("");
//       setBodyText("");
//     } catch (error) {
//       console.error(error);
//       setMessage("❌ Error saving devotion");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "sans-serif" }}>
//       <h2>Add New Devotion</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title</label>
//         <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />

//         <label>Bible Verse</label>
//         <input
//           value={bibleVerse}
//           onChange={(e) => setBibleVerse(e.target.value)}
//           placeholder="Enter Bible verse (e.g. John 3:16)"
//         />

//         <label>Body Text</label>
//         <textarea
//           value={bodyText}
//           onChange={(e) => setBodyText(e.target.value)}
//           placeholder="Write your devotion..."
//           rows="5"
//         />

//         <button type="submit">Save Devotion</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AdminPanel;





import { useState } from "react";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    bibleVerse: "",
    bodyText: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/devotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save devotion");

      const data = await res.json();
      console.log("✅ Saved:", data);
      alert("Devotion saved successfully!");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Failed to save devotion");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bibleVerse"
        placeholder="Bible Verse"
        value={formData.bibleVerse}
        onChange={handleChange}
        required
      />
      <textarea
        name="bodyText"
        placeholder="Body Text"
        value={formData.bodyText}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AdminPanel;
