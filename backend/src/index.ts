// backend/src/index.ts
import express from 'express';
import { config } from './config/config';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

// Đăng ký route
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Ecommerce API' });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});