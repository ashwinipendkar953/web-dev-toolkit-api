const express = require("express");
const { initializeDatabase } = require("./db/db.conn");
const projectRoutes = require("./routes/projectRoutes");
const cors = require("cors");
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

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
