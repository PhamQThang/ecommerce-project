import dotenv from 'dotenv';

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key_123456',
  port: parseInt(process.env.PORT || '3000', 10),
};