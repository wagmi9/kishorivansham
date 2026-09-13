export const metadata = { title: 'Contact Us | Kishorivansham' };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-royal">Contact Us</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-royal/80">
          <p><span className="font-semibold text-royal">Business name:</span> Kishorivansham</p>
          <p><span className="font-semibold text-royal">Email:</span> [FILL: support email]</p>
          <p><span className="font-semibold text-royal">Phone / WhatsApp:</span> +91 93690 05422</p>
          <p><span className="font-semibold text-royal">Address:</span> [FILL: your business/shipping address]</p>
          <p><span className="font-semibold text-royal">Support hours:</span> [FILL: e.g. Mon–Sat, 10am–7pm]</p>
        </div>
      </div>
    </main>
  );
}
