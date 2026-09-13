'use client';

import { useState } from 'react';
import { X, Truck, CreditCard, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutModal({ open, onClose, onSuccess }) {
  const { items, subtotal, delivery, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '', pincode: '' });
  const [payment, setPayment] = useState('cod');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit phone number';
    if (!form.address.trim()) next.address = 'Address is required';
    if (!/^\d{6}$/.test(form.pincode.trim())) next.pincode = 'Enter a valid 6-digit pincode';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const saveOrder = async (paymentMethod) => {
    const payload = {
      customerName: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      pincode: form.pincode.trim(),
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      subtotal,
      delivery,
      total,
      paymentMethod,
    };

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Order save failed');
    return res.json();
  };

  const handleOnlinePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setErrors({ submit: 'Could not load payment gateway. Check your internet connection.' });
      setSubmitting(false);
      return;
    }

    const orderRes = await fetch('/api/razorpay/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total }),
    });

    if (!orderRes.ok) {
      setErrors({ submit: 'Could not start payment. Please try again.' });
      setSubmitting(false);
      return;
    }

    const razorpayOrder = await orderRes.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      name: 'Kishorivansham',
      description: 'Order payment',
      order_id: razorpayOrder.id,
      prefill: {
        name: form.name.trim(),
        contact: form.phone.trim(),
      },
      theme: { color: '#0D1B2A' },
      handler: async (response) => {
        try {
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

          if (!verifyData.verified) {
            setErrors({ submit: 'Payment verification failed. If money was deducted, contact us.' });
            setSubmitting(false);
            return;
          }

          const order = await saveOrder('Online');
          clearCart();
          setForm({ name: '', phone: '', address: '', pincode: '' });
          onSuccess(order);
        } catch (err) {
          setErrors({ submit: 'Payment succeeded but saving the order failed. Please contact us with your payment ID.' });
        } finally {
          setSubmitting(false);
        }
      },
      modal: {
        ondismiss: () => {
          setSubmitting(false);
        },
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || items.length === 0) return;

    setSubmitting(true);
    setErrors({});

    try {
      if (payment === 'online') {
        await handleOnlinePayment();
        return;
      }

      const order = await saveOrder('COD');
      clearCart();
      setForm({ name: '', phone: '', address: '', pincode: '' });
      onSuccess(order);
    } catch (err) {
      setErrors({ submit: 'Something went wrong placing your order. Please try again.' });
    } finally {
      if (payment !== 'online') setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-royal/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-royal/10 px-6 py-4">
          <h2 className="font-serif text-xl font-semibold text-royal">Checkout</h2>
          <button onClick={onClose} aria-label="Close checkout">
            <X size={20} className="text-royal/60" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 p-6 sm:grid-cols-5">
          <div className="space-y-4 sm:col-span-3">
            <h3 className="border-l-2 border-gold pl-3 text-sm font-medium text-royal/70">
              Shipping Address
            </h3>

            <div>
              <label className="mb-1 block text-xs font-medium text-royal/60">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-royal/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-royal/60">Phone Number</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-royal/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-royal/60">Full Address</label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={3}
                className="w-full rounded-lg border border-royal/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
                placeholder="House no., street, locality, city, state"
              />
              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-royal/60">Pincode</label>
              <input
                value={form.pincode}
                onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                className="w-full rounded-lg border border-royal/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
                placeholder="6-digit pincode"
              />
              {errors.pincode && <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>}
            </div>

            <h3 className="border-l-2 border-gold pl-3 pt-2 text-sm font-medium text-royal/70">
              Payment Method
            </h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setPayment('cod')}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${
                  payment === 'cod' ? 'border-gold bg-gold/10' : 'border-royal/15 bg-white'
                }`}
              >
                <Truck size={18} className="text-royal" />
                <div>
                  <p className="text-sm font-medium text-royal">Cash on Delivery</p>
                  <p className="text-xs text-royal/50">Pay when your order arrives</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPayment('online')}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${
                  payment === 'online' ? 'border-gold bg-gold/10' : 'border-royal/15 bg-white'
                }`}
              >
                <CreditCard size={18} className="text-royal" />
                <div>
                  <p className="text-sm font-medium text-royal">Instant Online Payment</p>
                  <p className="text-xs text-royal/50">Cards, UPI &amp; wallets — powered by Razorpay</p>
                </div>
              </button>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="border-l-2 border-gold pl-3 text-sm font-medium text-royal/70">
              Order Summary
            </h3>
            <div className="mt-3 rounded-xl border border-royal/10 bg-white p-4">
              <ul className="max-h-40 space-y-2 overflow-y-auto text-sm">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-2">
                    <span className="text-royal/70">
                      {item.name} <span className="text-royal/40">×{item.qty}</span>
                    </span>
                    <span className="shrink-0 font-medium text-royal">
                      ₹{(item.price * item.qty).toLocaleString('en-IN')}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 space-y-1 border-t border-royal/10 pt-3 text-sm text-royal/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                </div>
                <div className="flex justify-between font-serif text-base font-semibold text-royal">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {errors.submit && <p className="mt-3 text-xs text-red-500">{errors.submit}</p>}

            <button
              type="submit"
              disabled={submitting || items.length === 0}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-royal py-3 text-sm font-semibold text-cream transition hover:bg-royal-light disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {payment === 'online' ? 'Opening payment...' : 'Placing order...'}
                </>
              ) : (
                'Place Order'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
