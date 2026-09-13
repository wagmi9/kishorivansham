export const metadata = { title: 'Privacy Policy | Kishorivansham' };

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-royal">Privacy Policy</h1>
        <p className="mt-2 text-sm text-royal/50">Last updated: [FILL: date]</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-royal/80">
          <p>Kishorivansham ("we", "us", "our") respects your privacy. This policy explains what information we collect when you use this website and how we use it.</p>
          <div>
            <h2 className="font-semibold text-royal">Information We Collect</h2>
            <p>When you place an order, we collect your name, phone number, delivery address and pincode. We do not collect or store your card, UPI or bank details — these are handled directly and securely by our payment partner, Razorpay.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">How We Use Your Information</h2>
            <p>We use this information to process and deliver your order, to contact you about your order status, and to provide customer support.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Sharing of Information</h2>
            <p>We share order details only with our delivery partners (to ship your order) and our payment gateway, Razorpay (to process payments). We do not sell your information to third parties.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Data Security</h2>
            <p>We take reasonable measures to protect your information. Payments are processed through Razorpay's secure, PCI-DSS compliant systems.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Your Rights</h2>
            <p>You may contact us at any time to ask what information we hold about you or to request that it be deleted.</p>
          </div>
          <div>
            <h2 className="font-semibold text-royal">Contact Us</h2>
            <p>For any privacy questions, email us at [FILL: support email] or call +91 93690 05422.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
