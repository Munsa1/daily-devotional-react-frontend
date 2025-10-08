const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "../data/devotionals.json");

function readDevotionals() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
}

function saveDevotionals(devotionals) {
  fs.writeFileSync(dataFile, JSON.stringify(devotionals, null, 2));
}

exports.saveDevotion = (req, res) => {
  const { title, verse, message } = req.body;
  if (!title || !verse || !message)
    return res.status(400).json({ error: "All fields are required." });

  const devotionals = readDevotionals();
  const newDevotion = {
    id: devotionals.length + 1,
    title,
    verse,
    message,
    date: new Date().toISOString(),
  };

  devotionals.push(newDevotion);
  saveDevotionals(devotionals);
  res.status(201).json({ message: "Devotional saved successfully." });
};

exports.getLatestDevotion = (req, res) => {
  const devotionals = readDevotionals();
  if (devotionals.length === 0)
    return res.status(404).json({ error: "No devotionals found." });
  res.json(devotionals[devotionals.length - 1]);
};
