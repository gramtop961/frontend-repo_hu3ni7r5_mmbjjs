import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Settings, User } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-2xl bg-[#0A1F3F]">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-white/90" />
          <span className="text-white font-semibold tracking-wide">FinTrak Ledger</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition">
            <Settings className="h-5 w-5" />
            <span className="text-sm">Settings</span>
          </button>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-white">
            <User className="h-5 w-5" />
            <span className="text-sm">Tunde</span>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 px-6 md:px-10 mt-16 max-w-4xl">
        <h1 className="text-white text-2xl md:text-4xl font-semibold leading-tight">
          Welcome back, Tunde 👋
        </h1>
        <p className="text-white/85 mt-2 md:text-lg">
          Here’s your financial overview for this week — all books are balanced and up to date.
        </p>
        <div className="mt-5 inline-flex gap-3">
          <span className="text-xs md:text-sm text-white/80 bg-white/10 backdrop-blur rounded-full px-3 py-1">
            Primary: #063A84
          </span>
          <span className="text-xs md:text-sm text-white/80 bg-white/10 backdrop-blur rounded-full px-3 py-1">
            Accent: #2E8B57
          </span>
        </div>
      </div>

      {/* Gradient overlay to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1F3F] via-transparent to-transparent opacity-80" />
    </section>
  );
}
