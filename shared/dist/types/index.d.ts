import type { categories, order_items, orders, payments, product_images, product_imeis, product_variants, products, promotion_products, promotions, purchase_order_items, purchase_orders, returns, roles, suppliers, user_roles, users, warranties, warranty_requests } from '@prisma/client';
export type Category = categories;
export type OrderItem = order_items;
export type Order = orders;
export type Payment = payments;
export type ProductImage = product_images;
export type ProductImei = product_imeis;
export type ProductVariant = product_variants;
export type Product = products;
export type PromotionProduct = promotion_products;
export type Promotion = promotions;
export type PurchaseOrderItem = purchase_order_items;
export type PurchaseOrder = purchase_orders;
export type Return = returns;
export type Role = roles;
export type Supplier = suppliers;
export type UserRole = user_roles;
export type User = users;
export type Warranty = warranties;
export type WarrantyRequest = warranty_requests;
export declare enum RoleEnum {
    ADMIN = "admin",
    EMPLOYEE = "employee",
    CUSTOMER = "customer"
}
