// const express = require("express");
// const cors = require("cors");
// const devotionRoutes = require("./routes/devotionRoutes.js");


// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/devotion", devotionRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Important!

const filePath = path.join(__dirname, "devotions.json");

app.post("/devotion", (req, res) => {
  const { title, bibleVerse, bodyText } = req.body;

  // Validate
  if (!title || !bibleVerse || !bodyText) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newDevotion = {
    id: Date.now(),
    title,
    bibleVerse,
    bodyText,
    date: new Date().toISOString(),
  };

  // Read, update, save JSON file
  let devotions = [];
  if (fs.existsSync(filePath)) {
    devotions = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  devotions.push(newDevotion);
  fs.writeFileSync(filePath, JSON.stringify(devotions, null, 2));

  res.status(201).json({ message: "Devotion saved successfully!", data: newDevotion });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
