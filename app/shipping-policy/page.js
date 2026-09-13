export const metadata = { title: 'Shipping Policy | Kishorivansham' };

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-royal">Shipping Policy</h1>
        <p className="mt-2 text-sm text-royal/50">Last updated: [FILL: date]</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-royal/80">
          <div>
            <h2 className="font-semibold text-royal">Shipping Coverage</h2>
            <p>We currently ship across India.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Processing Time</h2>
            <p>Orders are processed and handed to our courier partner within [FILL: e.g. 1-2] business days of confirmation.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Delivery Timeframe</h2>
            <p>Delivery typically takes [FILL: e.g. 4-7] business days depending on your location, after the order is shipped.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Shipping Charges</h2>
            <p>Delivery is free on orders above ₹999. A flat fee of ₹99 applies to orders below this amount.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Order Tracking</h2>
            <p>You will be notified with tracking details once your order is shipped.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Contact Us</h2>
            <p>For shipping queries, reach us at [FILL: support email] or +91 93690 05422.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
