import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  const { amount } = await request.json();

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });
    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json({ error: 'Could not create payment order' }, { status: 500 });
  }
}
