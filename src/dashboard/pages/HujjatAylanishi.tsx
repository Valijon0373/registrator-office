import { ArrowRight, Clock, FileText, Send } from 'lucide-react'
import { departments } from '../data'

const workflowSteps = [
  {
    id: 1,
    title: 'Murojaat qabul qilindi',
    dept: 'Registrator ofisi',
    time: '09:15',
    status: 'done',
  },
  {
    id: 2,
    title: "Dekanat ko'rib chiqmoqda",
    dept: 'Dekanat',
    time: '10:30',
    status: 'active',
  },
  {
    id: 3,
    title: 'Hujjat tayyorlanmoqda',
    dept: "O'quv-uslubiy boshqarma",
    time: 'Kutilmoqda',
    status: 'pending',
  },
  {
    id: 4,
    title: 'Talabaga yetkazish',
    dept: 'Registrator ofisi',
    time: 'Kutilmoqda',
    status: 'pending',
  },
]

const recentDocs = [
  { id: 'H-4521', name: 'Talabalik guvohnomasi', from: 'Registrator', to: 'Dekanat', status: 'Yuborildi' },
  { id: 'H-4520', name: "Akademik ma'lumotnoma", from: 'Dekanat', to: 'Buxgalteriya', status: 'Ko\'rib chiqilmoqda' },
  { id: 'H-4519', name: "To'lov shartnomasi", from: 'Buxgalteriya', to: 'Registrator', status: 'Tugatildi' },
  { id: 'H-4518', name: 'Dars jadvali', from: "O'quv-uslubiy", to: 'Dekanat', status: 'Yuborildi' },
  { id: 'H-4517', name: 'Turar joy arizasi', from: 'Registrator', to: 'Marketing', status: 'Kechikkan' },
]

export default function HujjatAylanishi() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hujjat aylanishi</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Bo'limlar o'rtasidagi hujjatlar harakatini kuzatish
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Faol jarayon — M-2026-1847
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Abdullayev Jasur · Talabalik guvohnomasi
            </p>

            <div className="mt-6 space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        step.status === 'done'
                          ? 'bg-emerald-500 text-white'
                          : step.status === 'active'
                            ? 'bg-urspi-500 text-white ring-4 ring-urspi-100'
                            : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {step.status === 'done' ? '✓' : index + 1}
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div
                        className={`mt-1 w-0.5 flex-1 ${
                          step.status === 'done' ? 'bg-emerald-300' : 'bg-slate-200'
                        }`}
                        style={{ minHeight: 32 }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium text-slate-900 dark:text-white">{step.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{step.dept}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                      <Clock className="h-3 w-3" />
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <div className="border-b border-slate-100 p-6 dark:border-slate-800">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                So'nggi hujjatlar
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Hujjat</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Kimdan</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Kimga</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Holat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {recentDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4 font-mono text-sm text-urspi-600 dark:text-urspi-400">{doc.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{doc.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{doc.from}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{doc.to}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            doc.status === 'Tugatildi'
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                              : doc.status === 'Kechikkan'
                                ? 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                                : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Bo'limlar</h2>
            <div className="mt-4 space-y-3">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3 dark:border-slate-800"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-urspi-500 dark:text-urspi-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {dept.shortName}
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    {dept.pending}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-urspi-600 py-3.5 text-sm font-semibold text-white hover:bg-urspi-700"
          >
            <Send className="h-4 w-4" />
            Hujjat yuborish
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
