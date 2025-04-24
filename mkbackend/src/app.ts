import express from 'express';
import customerRoutes from './routes/customer.routes';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json()); // ให้ Express รองรับ JSON
app.use('/api/customers', customerRoutes);

export default app;
