export const metadata = { title: 'Terms of Service | Kishorivansham' };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-royal">Terms of Service</h1>
        <p className="mt-2 text-sm text-royal/50">Last updated: [FILL: date]</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-royal/80">
          <p>By using this website and placing an order, you agree to the following terms.</p>
          <div>
            <h2 className="font-semibold text-royal">Products and Pricing</h2>
            <p>We make every effort to display product details and prices accurately. Prices are listed in Indian Rupees (INR) and are subject to change without notice.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Orders</h2>
            <p>An order is confirmed once payment is completed (for online payments) or once placed (for Cash on Delivery). We reserve the right to cancel any order due to stock unavailability, pricing errors, or suspected fraud, in which case any payment made will be refunded in full.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Payments</h2>
            <p>Online payments are processed securely by Razorpay. We do not have access to or store your card, UPI or net banking credentials.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Intellectual Property</h2>
            <p>All content on this website, including images, text and logos, belongs to Kishorivansham and may not be used without permission.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Limitation of Liability</h2>
            <p>Kishorivansham is not liable for delays or issues caused by courier partners, incorrect address details provided by the customer, or events beyond our reasonable control.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Contact Us</h2>
            <p>Questions about these terms can be sent to [FILL: support email] or +91 93690 05422.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
