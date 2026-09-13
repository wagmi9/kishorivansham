import { NextResponse } from 'next/server';
import { getOrders, addOrder } from '@/lib/ordersStore';

export async function GET() {
  const orders = await getOrders();
  return NextResponse.json(orders);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.customerName || !body.phone || !body.address || !body.pincode) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'Order must contain at least one item' }, { status: 400 });
  }

  const order = await addOrder(body);
  return NextResponse.json(order, { status: 201 });
}
