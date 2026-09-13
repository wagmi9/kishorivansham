'use client';

import {
  Crown,
  Sparkles,
  Gem,
  KeyRound,
  Feather,
  Sun,
  Gift,
  PackageOpen,
  Flame,
  ImageIcon,
} from 'lucide-react';

const ICONS = {
  Crown,
  Sparkles,
  Gem,
  KeyRound,
  Feather,
  Sun,
  Gift,
  PackageOpen,
  Flame,
};

export default function ProductPlaceholderImage({ icon, className = '' }) {
  const Icon = ICONS[icon] || ImageIcon;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #152a3f 55%, #0D1B2A 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 25%, #D4AF37 0%, transparent 45%)',
        }}
      />
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full border"
        style={{ borderColor: '#D4AF37' }}
      >
        <Icon size={28} color="#D4AF37" strokeWidth={1.5} />
      </div>
    </div>
  );
}
