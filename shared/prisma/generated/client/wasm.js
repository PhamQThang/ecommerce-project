
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoriesScalarFieldEnum = {
  category_id: 'category_id',
  category_name: 'category_name',
  description: 'description',
  is_active: 'is_active',
  display_order: 'display_order'
};

exports.Prisma.Order_itemsScalarFieldEnum = {
  item_id: 'item_id',
  order_id: 'order_id',
  variant_id: 'variant_id',
  imei_id: 'imei_id',
  quantity: 'quantity',
  unit_price: 'unit_price',
  total_price: 'total_price',
  promotion_id: 'promotion_id',
  discount_amount: 'discount_amount'
};

exports.Prisma.OrdersScalarFieldEnum = {
  order_id: 'order_id',
  user_id: 'user_id',
  order_date: 'order_date',
  total_amount: 'total_amount',
  discount_amount: 'discount_amount',
  final_amount: 'final_amount',
  status: 'status',
  shipping_address: 'shipping_address',
  shipping_method: 'shipping_method',
  shipping_fee: 'shipping_fee',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  payment_id: 'payment_id',
  order_id: 'order_id',
  payment_method: 'payment_method',
  payment_amount: 'payment_amount',
  payment_status: 'payment_status',
  transaction_id: 'transaction_id',
  payment_date: 'payment_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Product_imagesScalarFieldEnum = {
  image_id: 'image_id',
  product_id: 'product_id',
  variant_id: 'variant_id',
  image_url: 'image_url',
  is_primary: 'is_primary',
  display_order: 'display_order',
  created_at: 'created_at'
};

exports.Prisma.Product_imeisScalarFieldEnum = {
  imei_id: 'imei_id',
  variant_id: 'variant_id',
  imei_number: 'imei_number',
  purchase_price: 'purchase_price',
  purchase_order_id: 'purchase_order_id',
  order_id: 'order_id',
  status: 'status',
  sold_at: 'sold_at',
  created_at: 'created_at'
};

exports.Prisma.Product_variantsScalarFieldEnum = {
  variant_id: 'variant_id',
  product_id: 'product_id',
  color: 'color',
  storage_capacity: 'storage_capacity',
  ram: 'ram',
  sku: 'sku',
  price: 'price',
  discount_price: 'discount_price',
  stock_quantity: 'stock_quantity',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProductsScalarFieldEnum = {
  product_id: 'product_id',
  product_name: 'product_name',
  category_id: 'category_id',
  brand: 'brand',
  model: 'model',
  description: 'description',
  warranty_period: 'warranty_period',
  base_price: 'base_price',
  main_image_url: 'main_image_url',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Promotion_productsScalarFieldEnum = {
  promotion_id: 'promotion_id',
  product_id: 'product_id',
  variant_id: 'variant_id',
  created_at: 'created_at'
};

exports.Prisma.PromotionsScalarFieldEnum = {
  promotion_id: 'promotion_id',
  promotion_name: 'promotion_name',
  description: 'description',
  discount_type: 'discount_type',
  discount_value: 'discount_value',
  start_date: 'start_date',
  end_date: 'end_date',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Purchase_order_itemsScalarFieldEnum = {
  item_id: 'item_id',
  order_id: 'order_id',
  variant_id: 'variant_id',
  quantity: 'quantity',
  unit_price: 'unit_price',
  total_price: 'total_price'
};

exports.Prisma.Purchase_ordersScalarFieldEnum = {
  order_id: 'order_id',
  supplier_id: 'supplier_id',
  order_date: 'order_date',
  total_amount: 'total_amount',
  status: 'status',
  created_by: 'created_by',
  received_at: 'received_at'
};

exports.Prisma.ReturnsScalarFieldEnum = {
  return_id: 'return_id',
  order_id: 'order_id',
  user_id: 'user_id',
  return_date: 'return_date',
  reason: 'reason',
  status: 'status',
  return_type: 'return_type',
  refund_amount: 'refund_amount',
  new_imei_id: 'new_imei_id',
  handled_by: 'handled_by',
  resolved_at: 'resolved_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RolesScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name',
  description: 'description'
};

exports.Prisma.SuppliersScalarFieldEnum = {
  supplier_id: 'supplier_id',
  supplier_name: 'supplier_name',
  contact_person: 'contact_person',
  phone_number: 'phone_number',
  email: 'email',
  address: 'address',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  notes: 'notes'
};

exports.Prisma.User_rolesScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id',
  assigned_date: 'assigned_date'
};

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  password: 'password',
  full_name: 'full_name',
  phone_number: 'phone_number',
  address: 'address',
  default_payment_method: 'default_payment_method',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status'
};

exports.Prisma.WarrantiesScalarFieldEnum = {
  warranty_id: 'warranty_id',
  imei_id: 'imei_id',
  order_id: 'order_id',
  warranty_start_date: 'warranty_start_date',
  warranty_end_date: 'warranty_end_date',
  warranty_period: 'warranty_period',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Warranty_requestsScalarFieldEnum = {
  request_id: 'request_id',
  warranty_id: 'warranty_id',
  user_id: 'user_id',
  request_date: 'request_date',
  issue_description: 'issue_description',
  status: 'status',
  resolution_details: 'resolution_details',
  resolved_at: 'resolved_at',
  handled_by: 'handled_by',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  categories: 'categories',
  order_items: 'order_items',
  orders: 'orders',
  payments: 'payments',
  product_images: 'product_images',
  product_imeis: 'product_imeis',
  product_variants: 'product_variants',
  products: 'products',
  promotion_products: 'promotion_products',
  promotions: 'promotions',
  purchase_order_items: 'purchase_order_items',
  purchase_orders: 'purchase_orders',
  returns: 'returns',
  roles: 'roles',
  suppliers: 'suppliers',
  user_roles: 'user_roles',
  users: 'users',
  warranties: 'warranties',
  warranty_requests: 'warranty_requests'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
