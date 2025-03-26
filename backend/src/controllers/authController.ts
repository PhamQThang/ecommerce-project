// backend/src/controllers/authController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@ecommerce/shared';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
console.log('PrismaClient:', PrismaClient);
const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { email },
      include: { user_roles: { include: { roles: true } } },
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const roles = user.user_roles.map((ur) => ur.roles.role_name);

    const token = jwt.sign(
      { user_id: user.user_id, email: user.email, roles },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token, user: { user_id: user.user_id, email: user.email, roles } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Đăng ký user (mặc định là customer)
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, full_name, phone_number, address } = req.body;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        full_name,
        phone_number,
        address,
        status: 'active',
      },
    });

    const customerRole = await prisma.roles.findFirst({
      where: { role_name: 'customer' },
    });
    if (!customerRole) {
      return res.status(500).json({ error: 'Customer role not found' });
    }

    await prisma.user_roles.create({
      data: {
        user_id: user.user_id,
        role_id: customerRole.role_id,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user: { user_id: user.user_id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Tạo user với vai trò cụ thể (dành cho admin)
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, full_name, phone_number, address, role_name } = req.body;

    const validRoles = ['admin', 'staff', 'customer'];
    if (!validRoles.includes(role_name)) {
      return res.status(400).json({ error: 'Invalid role. Must be admin, staff, or customer' });
    }

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        full_name,
        phone_number,
        address,
        status: 'active',
      },
    });

    const role = await prisma.roles.findFirst({
      where: { role_name },
    });
    if (!role) {
      return res.status(500).json({ error: `${role_name} role not found` });
    }

    await prisma.user_roles.create({
      data: {
        user_id: user.user_id,
        role_id: role.role_id,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: { user_id: user.user_id, email: user.email, role: role_name } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};