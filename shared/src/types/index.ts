export enum Role {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  CUSTOMER = 'customer',
}

export interface User {
  userId: number;
  role: Role;
}

export interface Product {
  productId: number;
  productName: string;
  categoryId?: number;
  model: string;
  description?: string;
  warrantyPeriod?: number;
  basePrice?: number;
  mainImageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  reviewId: number;
  productId: number;
  userId?: number;
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  orderId: number;
  userId?: number;
  orderDate: string;
  totalAmount: number;
  discountAmount: number;
  finalAmount: number;
  status: string;
  shippingAddress: string;
  shippingMethod?: string;
  shippingFee: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}