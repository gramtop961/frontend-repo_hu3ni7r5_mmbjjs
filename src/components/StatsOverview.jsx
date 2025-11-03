import React from 'react';
import { ArrowDownRight, ArrowUpRight, Banknote, CheckCircle2, Clock3, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendPositive, accent }) => (
  <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <h3 className="text-2xl font-semibold text-slate-900">{value}</h3>
          {trend && (
            <span className={`${trendPositive ? 'text-emerald-600' : 'text-rose-600'} text-xs inline-flex items-center gap-1`}>
              {trendPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {trend}
            </span>
          )}
        </div>
      </div>
      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Transactions today"
        value="120"
        icon={Clock3}
        trend="+4.2%"
        trendPositive
        accent="text-emerald-700 bg-emerald-50"
      />
      <StatCard
        title="Balanced Accounts"
        value="96%"
        icon={CheckCircle2}
        trend="stable"
        trendPositive
        accent="text-blue-700 bg-blue-50"
      />
      <StatCard
        title="Pending Approvals"
        value="4"
        icon={TrendingUp}
        trend="-1"
        accent="text-amber-700 bg-amber-50"
      />
      <StatCard
        title="Net Cash Flow (Today)"
        value="₦75,000"
        icon={Banknote}
        trend="In ₦250,000 | Out ₦175,000"
        trendPositive
        accent="text-indigo-700 bg-indigo-50"
      />
    </section>
  );
}
