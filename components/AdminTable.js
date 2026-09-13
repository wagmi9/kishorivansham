'use client';

import { useEffect, useState } from 'react';
import { PackageCheck, Clock, IndianRupee, RefreshCw } from 'lucide-react';

const STATUS_OPTIONS = ['Pending', 'Packed', 'Shipped', 'Delivered'];

const STATUS_STYLES = {
  Pending: 'bg-amber-100 text-amber-700',
  Packed: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-purple-100 text-purple-700',
  Delivered: 'bg-emerald-100 text-emerald-700',
};

export default function AdminTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      // keep the last known state if the fetch fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, status) => {
    setOrders((prev) => prev.map((o) => (o.orderId === orderId ? { ...o, status } : o)));
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    } catch (err) {
      loadOrders();
    }
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter((o) => o.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={PackageCheck} label="Total orders" value={orders.length} />
        <StatCard icon={Clock} label="Pending orders" value={pendingCount} />
        <StatCard
          icon={IndianRupee}
          label="Total revenue"
          value={`₹${totalRevenue.toLocaleString('en-IN')}`}
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg font-semibold text-royal">Incoming orders</h2>
        <button
          onClick={loadOrders}
          className="flex items-center gap-1.5 rounded-full border border-royal/15 px-3 py-1.5 text-xs font-medium text-royal/70 hover:border-gold hover:text-royal"
        >
          <RefreshCw size={13} />
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-royal/10 bg-white">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead>
            <tr className="border-b border-royal/10 text-xs text-royal/50">
              <th className="px-4 py-3 font-medium">Order ID</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Address</th>
              <th className="px-4 py-3 font-medium">Items</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Payment</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-royal/40">
                  Loading orders...
                </td>
              </tr>
            )}
            {!loading && orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-royal/40">
                  No orders yet.
                </td>
              </tr>
            )}
            {orders.map((order) => (
              <tr key={order.orderId} className="border-b border-royal/5 last:border-0">
                <td className="px-4 py-3 font-medium text-royal">{order.orderId}</td>
                <td className="px-4 py-3">
                  <p className="font-medium text-royal">{order.customerName}</p>
                  <p className="text-xs text-royal/50">{order.phone}</p>
                </td>
                <td className="max-w-[200px] px-4 py-3 text-royal/70" title={order.address}>
                  <span className="line-clamp-2">
                    {order.address}, {order.pincode}
                  </span>
                </td>
                <td className="px-4 py-3 text-royal/70">
                  <span title={order.items.map((i) => `${i.name} ×${i.qty}`).join(', ')}>
                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-royal">
                  ₹{order.total.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      order.paymentMethod === 'COD' ? 'bg-royal/10 text-royal' : 'bg-gold/20 text-gold-dark'
                    }`}
                  >
                    {order.paymentMethod}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                    className={`rounded-full border-0 px-2.5 py-1 text-xs font-medium outline-none ${STATUS_STYLES[order.status]}`}
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-royal/10 bg-white p-4">
      <div className="flex items-center gap-2 text-royal/50">
        <Icon size={16} />
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="mt-2 font-serif text-2xl font-semibold text-royal">{value}</p>
    </div>
  );
}
