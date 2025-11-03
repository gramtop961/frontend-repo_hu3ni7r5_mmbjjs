import React from 'react';
import HeroCover from './components/HeroCover';
import StatsOverview from './components/StatsOverview';
import DashboardSections from './components/DashboardSections';
import RolesPermissions from './components/RolesPermissions';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-slate-900">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
        <HeroCover />

        <StatsOverview />

        <DashboardSections />

        <RolesPermissions />
      </main>

      <footer className="py-8 text-center text-xs text-slate-500">
        FinTrak Ledger — Manage financial transactions across cash books, ledgers, and trial balances in one integrated platform.
      </footer>
    </div>
  );
}

export default App;
