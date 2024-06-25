require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB;

const initializeDatabase = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);
    if (connect) {
      console.log("Connected Successfully.");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeDatabase };
