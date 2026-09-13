import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AdminTable from '@/components/AdminTable';

export const metadata = {
  title: 'Admin Dashboard | Kishorivansham',
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-royal/40">Kishorivansham</p>
            <h1 className="font-serif text-2xl font-semibold text-royal">
              Order Tracking Dashboard
            </h1>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-royal/60 hover:text-royal"
          >
            <ArrowLeft size={15} />
            Back to store
          </Link>
        </div>

        <AdminTable />
      </div>
    </main>
  );
}
