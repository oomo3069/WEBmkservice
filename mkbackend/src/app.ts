import express from 'express';
import customerRoutes from './routes/customer.routes';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json()); // ให้ Express รองรับ JSON
app.use('/api/customers', customerRoutes);

export default app;
