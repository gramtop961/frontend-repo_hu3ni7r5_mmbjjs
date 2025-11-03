import React from 'react';

const rows = [
  {
    role: 'Admin',
    permissions: 'Full system access',
    actions: 'Add users, manage roles, approve ledger entries',
  },
  {
    role: 'Accountant',
    permissions: 'Manage transactions',
    actions: 'Record transactions, post to ledger, view reports',
  },
  {
    role: 'Finance Officer',
    permissions: 'View summaries',
    actions: 'Access dashboards, approve expenses, monitor balances',
  },
  {
    role: 'Auditor',
    permissions: 'Read-only',
    actions: 'Access ledgers, trial balance, and audit logs',
  },
];

export default function RolesPermissions() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-slate-900 font-semibold">Roles & Permissions</h3>
      <p className="text-slate-500 text-sm mt-1">Define access for Admin, Accountant, Finance Officer, and Auditor.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="py-2 pr-6">Role</th>
              <th className="py-2 pr-6">Permissions</th>
              <th className="py-2">Example Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.role} className="border-t border-slate-100">
                <td className="py-3 pr-6 font-medium text-slate-900">{r.role}</td>
                <td className="py-3 pr-6 text-slate-700">{r.permissions}</td>
                <td className="py-3 text-slate-700">{r.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
