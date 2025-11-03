import React from 'react';
import { BookOpen, FileSpreadsheet, FileText, Plus, Wallet, Banknote, Download, AlertTriangle, CheckCircle2 } from 'lucide-react';

function SectionCard({ title, description, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-slate-900 font-semibold">{title}</h3>
          {description && <p className="text-slate-500 text-sm mt-1">{description}</p>}
        </div>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

export default function DashboardSections() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Cashbook */}
      <section className="lg:col-span-5 space-y-4">
        <SectionCard title="Cashbook" description="Manage daily cash inflows and outflows.">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#2E8B57] text-white px-3 py-2 text-sm hover:brightness-110">
              <Plus className="h-4 w-4" />
              💰 Add New Cash Entry
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 text-slate-700 px-3 py-2 text-sm hover:bg-slate-200">
              <Wallet className="h-4 w-4" />
              Cash In
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 text-slate-700 px-3 py-2 text-sm hover:bg-slate-200">
              <Banknote className="h-4 w-4" />
              Cash Out
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-slate-500">Today’s Inflow</p>
              <p className="font-semibold text-slate-900">₦250,000</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-slate-500">Today’s Outflow</p>
              <p className="font-semibold text-slate-900">₦175,000</p>
            </div>
            <div className="rounded-lg bg-emerald-50 p-3">
              <p className="text-emerald-700">Net Cash Flow</p>
              <p className="font-semibold text-emerald-900">+₦75,000</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Tip: Record daily cash movements to keep your books accurate.</p>
        </SectionCard>

        <SectionCard title="Bank Book" description="Manage bank deposits and withdrawals independently.">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">
              🏦 Add Bank Transaction
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 text-slate-700 px-3 py-2 text-sm hover:bg-slate-200">
              <FileText className="h-4 w-4" />
              Upload Bank Slip
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">Keep your bank reconciliations up to date for accuracy.</p>
        </SectionCard>
      </section>

      {/* Ledger & Trial Balance */}
      <section className="lg:col-span-7 space-y-4">
        <SectionCard title="General Ledger" description="Master record of all accounts and journal entries.">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#063A84] text-white px-3 py-2 text-sm hover:brightness-110">
              <Plus className="h-4 w-4" />
              ➕ New Journal Entry
            </button>
            <div className="rounded-lg bg-slate-50 p-3 text-sm">
              <p className="text-slate-500">Tip</p>
              <p className="text-slate-700">Ensure debit equals credit for a balanced ledger.</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg border border-slate-200 p-3">
              <p className="text-slate-500">Total Debits</p>
              <p className="font-semibold text-slate-900">₦12,500,000</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3">
              <p className="text-slate-500">Total Credits</p>
              <p className="font-semibold text-slate-900">₦12,500,000</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 flex items-center justify-between">
              <div>
                <p className="text-slate-500">Status</p>
                <p className="font-semibold text-emerald-700 inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Balanced
                </p>
              </div>
              <BookOpen className="h-6 w-6 text-slate-400" />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Empty State: No ledger entries yet — start by posting your first transaction!</p>
        </SectionCard>

        <SectionCard title="Trial Balance" description="Summarize all ledger balances to ensure accuracy.">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 text-slate-700 px-3 py-2 text-sm hover:bg-slate-50">
              <FileSpreadsheet className="h-4 w-4" />
              📊 Trial Balance Summary
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#2E8B57] text-white px-3 py-2 text-sm hover:brightness-110">
              <Download className="h-4 w-4" />
              🧾 Export to PDF
            </button>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 text-amber-800 p-3 text-sm inline-flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Debits and credits do not match. Review recent entries.
          </div>
        </SectionCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="Reports" description="Export summaries (PDF/Excel).">
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">
                <FileText className="h-4 w-4" /> Export PDF
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 text-slate-700 px-3 py-2 text-sm hover:bg-slate-200">
                <FileSpreadsheet className="h-4 w-4" /> Export Excel
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Audit Logs" description="System activity tracking for transparency.">
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Admin approved ledger entry #1932</li>
              <li>• Auditor viewed Trial Balance (Q3)</li>
              <li>• Accountant posted Journal Entry JV-2209</li>
            </ul>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
