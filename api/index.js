import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => {
    console.log(`Mongodb is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
