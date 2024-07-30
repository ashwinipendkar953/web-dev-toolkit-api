const express = require("express");
const { initializeDatabase } = require("./db/db.conn");
const neogPrcProjectRoutes = require("./routes/neogPrcProjectRoutes");
const neogMcrRoutes = require("./routes/neogMcrRoutes");
const cors = require("cors");
require("dotenv").config();
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

initializeDatabase();

// Use the peoject routes
app.use("/api", neogPrcProjectRoutes);
app.use("/api", neogMcrRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
