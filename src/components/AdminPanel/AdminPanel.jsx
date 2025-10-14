import "./Admin.css"
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
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Add A New Devotion</h1>
      <div className="form">
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
      </div>    
    </form>
  );
};

export default AdminPanel;
