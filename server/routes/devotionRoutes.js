// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const router = express.Router();
// const devotionsFile = path.join(__dirname, "../data/devotions.json");

// // 🟢 POST /devotion → Save a new devotional
// router.post("/", (req, res) => {
//   try {
//     const { title, message, scripture, date } = req.body;

//     // Basic validation
//     if (!title || !message || !scripture || !date) {
//       return res.status(400).json({ message: "All fields (title, message, scripture, date) are required." });
//     }

//     // Load existing devotionals or create empty array
//     let devotions = [];
//     if (fs.existsSync(devotionsFile)) {
//       const fileData = fs.readFileSync(devotionsFile, "utf8");
//       devotions = fileData ? JSON.parse(fileData) : [];
//     }

//     // Create new devotional entry
//     const newDevotion = { id: Date.now(), title, message, scripture, date };

//     devotions.push(newDevotion);

//     // Save back to file
//     fs.writeFileSync(devotionsFile, JSON.stringify(devotions, null, 2));

//     res.status(201).json({ message: "Devotional saved successfully!", devotion: newDevotion });
//   } catch (error) {
//     console.error("Error saving devotional:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// });

// // 🟢 GET /devotion/latest → Get the latest devotional
// router.get("/latest", (req, res) => {
//   try {
//     if (!fs.existsSync(devotionsFile)) {
//       return res.status(404).json({ message: "No devotionals found" });
//     }

//     const data = JSON.parse(fs.readFileSync(devotionsFile, "utf-8"));
//     if (!Array.isArray(data) || data.length === 0) {
//       return res.status(404).json({ message: "No devotionals available" });
//     }

//     const latestDevotion = data[data.length - 1];
//     res.json(latestDevotion);
//   } catch (error) {
//     console.error("Error reading devotional:", error);
//     res.status(500).json({ message: "Error reading devotional", error: error.message });
//   }
// });










// // module.exports = router;

// const express = require("express");
// const router = express.Router();

// // Temporary in-memory store
// let latestDevotion = null;

// // POST route — Admin sends devotional data
// router.post("/", (req, res) => {
//   const { title, verse, message } = req.body;

//   if (!title || !verse || !message) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   latestDevotion = { title, verse, message, date: new Date() };
//   console.log("✅ New devotion stored:", latestDevotion);

//   res.status(201).json({ message: "Devotion saved successfully!", data: latestDevotion });
// });

// // GET route — Return the latest devotional
// router.get("/latest", (req, res) => {
//   if (!latestDevotion) {
//     return res.status(404).json({ error: "No devotional found." });
//   }

//   res.json(latestDevotion);
// });

// module.exports = router;



const express = require("express");
const { saveDevotion, getAllDevotions } = require("../controllers/devotionController.js");
const router = express.Router();

router.post("/", saveDevotion);
console.log("📥 Received data:", saveDevotion.body);
router.get("/", getAllDevotions);

module.exports = router;
