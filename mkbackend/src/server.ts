import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/customers', customerRoutes);

console.log("✅ JWT_SECRET:", process.env.JWT_SECRET);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
