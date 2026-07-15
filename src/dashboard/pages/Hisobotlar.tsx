import { BarChart3, Download, FileSpreadsheet, TrendingDown, TrendingUp } from 'lucide-react'
import { departments, weeklyStats } from '../data'

const monthlyReports = [
  { month: 'Yanvar 2026', total: 892, completed: 845, rate: 94.7 },
  { month: 'Fevral 2026', total: 756, completed: 720, rate: 95.2 },
  { month: 'Mart 2026', total: 1024, completed: 998, rate: 97.5 },
  { month: 'Aprel 2026', total: 678, completed: 651, rate: 96.0 },
  { month: 'May 2026', total: 834, completed: 810, rate: 97.1 },
  { month: 'Iyun 2026', total: 945, completed: 920, rate: 97.4 },
]

const reportTypes = [
  { name: 'Kunlik hisobot', desc: 'Bugungi murojaatlar statistikasi', icon: BarChart3 },
  { name: 'Haftalik hisobot', desc: 'Haftalik samaradorlik tahlili', icon: TrendingUp },
  { name: 'Oylik hisobot', desc: "Oylik to'liq hisobot", icon: FileSpreadsheet },
  { name: 'Bo\'lim bo\'yicha', desc: 'Har bir bo\'lim statistikasi', icon: Download },
]

export default function Hisobotlar() {
  const maxReceived = Math.max(...weeklyStats.map((d) => d.received))

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hisobotlar</h1>
          <p className="mt-1 text-sm text-slate-500">
            Statistika va tahliliy hisobotlar
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-urspi-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-urspi-700"
        >
          <Download className="h-4 w-4" />
          Hisobot yuklab olish
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reportTypes.map((report) => (
          <button
            key={report.name}
            type="button"
            className="rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-md hover:ring-urspi-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-urspi-50">
              <report.icon className="h-5 w-5 text-urspi-600" />
            </div>
            <p className="mt-3 font-semibold text-slate-900">{report.name}</p>
            <p className="mt-1 text-xs text-slate-500">{report.desc}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
          <h2 className="text-lg font-semibold text-slate-900">Haftalik tahlil</h2>
          <div className="mt-6 flex items-end justify-between gap-2" style={{ height: 160 }}>
            {weeklyStats.map((item) => (
              <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center" style={{ height: 120 }}>
                  <div
                    className="w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-urspi-600 to-urspi-400"
                    style={{ height: `${(item.received / maxReceived) * 100}%`, minHeight: 4 }}
                  />
                </div>
                <span className="text-xs text-slate-500">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
          <h2 className="text-lg font-semibold text-slate-900">Bo'limlar samaradorligi</h2>
          <div className="mt-4 space-y-4">
            {departments.map((dept) => {
              const total = dept.pending + dept.completed
              const rate = total > 0 ? Math.round((dept.completed / total) * 100) : 0
              return (
                <div key={dept.id}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-700">{dept.shortName}</span>
                    <span className="font-medium text-urspi-600">{rate}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-urspi-500"
                      style={{ width: `${rate}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Oylik hisobotlar</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">Oy</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">Jami</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">Tugatilgan</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">Samaradorlik</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {monthlyReports.map((report, i) => (
                <tr key={report.month} className="hover:bg-slate-50/80">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{report.month}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{report.total}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{report.completed}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                      {report.rate}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {i > 0 && report.rate >= monthlyReports[i - 1].rate ? (
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-rose-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
