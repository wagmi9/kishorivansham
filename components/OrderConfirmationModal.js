'use client';

import { CheckCircle2 } from 'lucide-react';

export default function OrderConfirmationModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-royal/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-cream p-6 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
          <CheckCircle2 size={32} className="text-gold" />
        </div>
        <h2 className="font-serif text-xl font-semibold text-royal">Order Confirmed!</h2>
        <p className="mt-1 text-sm text-royal/60">
          Thank you, {order.customerName}. We&apos;ll reach out shortly to confirm delivery.
        </p>

        <div className="mt-5 rounded-xl border border-royal/10 bg-white p-4 text-left text-sm">
          <div className="flex justify-between">
            <span className="text-royal/50">Order ID</span>
            <span className="font-semibold text-royal">{order.orderId}</span>
          </div>
          <div className="mt-1.5 flex justify-between">
            <span className="text-royal/50">Items</span>
            <span className="font-medium text-royal">{order.items.length}</span>
          </div>
          <div className="mt-1.5 flex justify-between">
            <span className="text-royal/50">Payment</span>
            <span className="font-medium text-royal">{order.paymentMethod}</span>
          </div>
          <div className="mt-1.5 flex justify-between border-t border-royal/10 pt-2 font-serif text-base font-semibold text-royal">
            <span>Total Paid</span>
            <span>₹{order.total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-full bg-royal py-3 text-sm font-semibold text-cream transition hover:bg-royal-light"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
