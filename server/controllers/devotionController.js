// const fs = require("fs");
// const path = require("path");

// const dataFile = path.join(__dirname, "../data/devotionals.json");

// function readDevotionals() {
//   if (!fs.existsSync(dataFile)) return [];
//   const data = fs.readFileSync(dataFile);
//   return JSON.parse(data);
// }

// function saveDevotionals(devotionals) {
//   fs.writeFileSync(dataFile, JSON.stringify(devotionals, null, 2));
// }

// exports.saveDevotion = (req, res) => {
//   const { title, verse, message } = req.body;
//   if (!title || !verse || !message)
//     return res.status(400).json({ error: "All fields are required." });

//   const devotionals = readDevotionals();
//   const newDevotion = {
//     id: devotionals.length + 1,
//     title,
//     verse,
//     message,
//     date: new Date().toISOString(),
//   };

//   devotionals.push(newDevotion);
//   saveDevotionals(devotionals);
//   res.status(201).json({ message: "Devotional saved successfully." });
// };

// exports.getLatestDevotion = (req, res) => {
//   const devotionals = readDevotionals();
//   if (devotionals.length === 0)
//     return res.status(404).json({ error: "No devotionals found." });
//   res.json(devotionals[devotionals.length - 1]);
// };


const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "../data/devotions.json");

// ✅ POST /devotion — Save new devotion
const saveDevotion = (req, res) => {
  const { title, bibleVerse, bodyText } = req.body;

  if (!title || !bibleVerse || !bodyText) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newDevotion = {
    id: Date.now(),
    title,
    bibleVerse,
    bodyText,
    date: new Date().toISOString(),
  };

  let devotions = [];
  if (fs.existsSync(dataFile)) {
    const data = fs.readFileSync(dataFile);
    devotions = JSON.parse(data);
  }

  devotions.push(newDevotion);
  fs.writeFileSync(dataFile, JSON.stringify(devotions, null, 2));

  res.json({ message: "Devotion saved successfully!", data: newDevotion });
};

// ✅ GET /devotion — Fetch all devotions
const getAllDevotions = (req, res) => {
  if (!fs.existsSync(dataFile)) {
    return res.json([]);
  }

  const data = fs.readFileSync(dataFile);
  const devotions = JSON.parse(data);
  res.json(devotions);
};

module.exports = { saveDevotion, getAllDevotions };
