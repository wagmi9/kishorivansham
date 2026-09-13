import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const ORDERS_KEY = 'kishorivansham:orders';

export async function getOrders() {
  const orders = await redis.get(ORDERS_KEY);
  return orders || [];
}

function generateOrderId() {
  const stamp = Date.now().toString().slice(-6);
  const rand = Math.floor(100 + Math.random() * 900);
  return `KV${stamp}${rand}`;
}

export async function addOrder(payload) {
  const orders = await getOrders();
  const order = {
    orderId: generateOrderId(),
    customerName: payload.customerName,
    phone: payload.phone,
    address: payload.address,
    pincode: payload.pincode,
    items: payload.items,
    subtotal: payload.subtotal,
    delivery: payload.delivery,
    total: payload.total,
    paymentMethod: payload.paymentMethod,
    status: 'Pending',
    createdAt: new Date().toISOString(),
  };
  orders.unshift(order);
  await redis.set(ORDERS_KEY, orders);
  return order;
}

export async function updateOrderStatus(orderId, status) {
  const orders = await getOrders();
  const idx = orders.findIndex((o) => o.orderId === orderId);
  if (idx === -1) return null;
  orders[idx].status = status;
  await redis.set(ORDERS_KEY, orders);
  return orders[idx];
}
