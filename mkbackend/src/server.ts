import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';
import dotenv from 'dotenv';
import visitorRoutes from "./routes/visitorRoutes";

dotenv.config();

const app = express();

// ✅ ตรงนี้ต้องอยู่ก่อน route ใด ๆ
app.use(cors({
  origin: [
    "https://mkservice-tpr.vercel.app", // domain เก่า
    "https://mkservice-gs5msgy8h-oomo3069s-projects.vercel.app" // domain ใหม่ที่ error
  ],
  credentials: true
}));

app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use("/api/visitors", visitorRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
