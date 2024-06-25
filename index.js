const express = require("express");
const { initializeDatabase } = require("./db/db.conn");
const projectRoutes = require("./routes/projectRoutes");
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
app.use("/api", projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
