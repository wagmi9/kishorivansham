export const metadata = { title: 'Refund & Cancellation Policy | Kishorivansham' };

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-royal">Refund &amp; Cancellation Policy</h1>
        <p className="mt-2 text-sm text-royal/50">Last updated: [FILL: date]</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-royal/80">
          <div>
            <h2 className="font-semibold text-royal">Order Cancellation</h2>
            <p>You may cancel your order free of charge any time before it has been shipped. Once shipped, an order cannot be cancelled.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Returns</h2>
            <p>If you receive a damaged, defective, or incorrect item, you may request a return within [FILL: e.g. 3] days of delivery. Please share a photo/video of the item along with your Order ID.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Non-Returnable Items</h2>
            <p>Due to the personal and devotional nature of some items, made-to-order or customised products are not eligible for return unless damaged or defective on arrival.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Refunds</h2>
            <p>Approved refunds are processed within [FILL: e.g. 5-7] business days to the original payment method. For Cash on Delivery orders, refunds (where applicable) are made via bank transfer or UPI.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">How to Request a Return or Refund</h2>
            <p>Contact us at [FILL: support email] or +91 93690 05422 with your Order ID and reason for the request.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
