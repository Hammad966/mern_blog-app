import express from "express";
const app = express();
app.use(express.json())
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
 
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8001, () => {
  console.log(`Server is running on port 3000`);
});
