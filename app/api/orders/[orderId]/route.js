import { NextResponse } from 'next/server';
import { updateOrderStatus } from '@/lib/ordersStore';

const ALLOWED_STATUSES = ['Pending', 'Packed', 'Shipped', 'Delivered'];

export async function PATCH(request, { params }) {
  const { status } = await request.json();

  if (!ALLOWED_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const updated = await updateOrderStatus(params.orderId, status);
  if (!updated) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json(updated);
}
