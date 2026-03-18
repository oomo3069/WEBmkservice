import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';
import dotenv from 'dotenv';
import visitorRoutes from "./routes/visitorRoutes";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://we-bmkservice.vercel.app",
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log("🔥 REQUEST HIT:", req.method, req.url);
  next();
});

app.use('/api/customers', customerRoutes);
app.use("/api/visitors", visitorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`✅ Server is running on port ${PORT}`)
);