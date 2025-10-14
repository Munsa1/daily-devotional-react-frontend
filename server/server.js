const express = require("express");
const cors = require("cors");
const devotionRoutes = require("./routes/devotionRoutes.js");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/devotion", devotionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

