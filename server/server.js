// // server.js
// const express = require("express");
// const fs = require("fs");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json()); // ✅ Important!

// const filePath = path.join(__dirname, "devotions.json");

// app.post("/devotion", (req, res) => {
//   const { title, bibleVerse, bodyText } = req.body;

//   // Validate
//   if (!title || !bibleVerse || !bodyText) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const newDevotion = {
//     id: Date.now(),
//     title,
//     bibleVerse,
//     bodyText,
//     date: new Date().toISOString(),
//   };

//   // Read, update, save JSON file
//   let devotions = [];
//   if (fs.existsSync(filePath)) {
//     devotions = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   }
//   devotions.push(newDevotion);
//   fs.writeFileSync(filePath, JSON.stringify(devotions, null, 2));

//   res.status(201).json({ message: "Devotion saved successfully!", data: newDevotion });
// });

// app.listen(5000, () => console.log("✅ Server running on port 5000"));




// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "devotions.json");

// 🟢 POST - Save new devotion
app.post("/devotion", (req, res) => {
  const { title, bibleVerse, bodyText } = req.body;

  if (!title || !bibleVerse || !bodyText) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Create a new devotion object
  const newDevotion = {
    id: Date.now(),
    title,
    scripture: bibleVerse,
    message: bodyText,
    createdAt: new Date().toISOString(),
  };

  // Read existing file or create new one
  let devotions = [];
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    devotions = data ? JSON.parse(data) : [];
  }

  // Add the new devotion
  devotions.push(newDevotion);

  // Save to file
  fs.writeFileSync(DATA_FILE, JSON.stringify(devotions, null, 2));

  res.json({ message: "Devotion saved successfully!", data: newDevotion });
});

// 🟢 GET - Get the latest devotion
app.get("/devotion/latest", (req, res) => {
  if (!fs.existsSync(DATA_FILE)) {
    return res.status(404).json({ error: "No devotionals found" });
  }

  const data = fs.readFileSync(DATA_FILE, "utf8");
  const devotions = data ? JSON.parse(data) : [];

  if (devotions.length === 0) {
    return res.status(404).json({ error: "No devotionals available" });
  }

  // Return the last devotion
  const latestDevotion = devotions[devotions.length - 1];
  res.json(latestDevotion);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
