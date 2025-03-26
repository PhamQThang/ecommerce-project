// backend/src/routes/authRoutes.ts
import { Router } from 'express';
import { register, login, createUser } from '../controllers/authController';
import { authMiddleware, roleMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Đăng ký (mặc định là customer)
router.post('/register', register);

// Đăng nhập
router.post('/login', login);

// Tạo user với vai trò cụ thể (chỉ admin được truy cập)
router.post('/create-user', authMiddleware, roleMiddleware(['admin']), createUser);

// Route ví dụ: Chỉ admin truy cập được
router.get('/admin-only', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

// Route ví dụ: Chỉ staff truy cập được
router.get('/staff-only', authMiddleware, roleMiddleware(['staff']), (req, res) => {
  res.json({ message: 'Welcome, staff!' });
});

// Route ví dụ: Chỉ customer truy cập được
router.get('/customer-only', authMiddleware, roleMiddleware(['customer']), (req, res) => {
  res.json({ message: 'Welcome, customer!' });
});

// Route ví dụ: Admin và staff truy cập được
router.get('/admin-staff', authMiddleware, roleMiddleware(['admin', 'staff']), (req, res) => {
  res.json({ message: 'Welcome, admin or staff!' });
});

// Route ví dụ: Yêu cầu đăng nhập (bất kỳ vai trò nào)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

export default router;