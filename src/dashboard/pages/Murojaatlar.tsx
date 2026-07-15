import { Download, Filter, Plus, Search } from 'lucide-react'
import { appeals } from '../data'
import StatusBadge from '../../component/StatusBadge'
import { documentCategories } from '../data'

const filters = ['Barchasi', 'Yangi', 'Jarayonda', 'Tugatilgan', "Muddati o'tgan"]

function getDocumentTitle(type: string) {
  return documentCategories.find((d) => d.type === type)?.title ?? type
}

export default function Murojaatlar() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Murojaatlar</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Barcha talaba murojaatlarini boshqarish va kuzatish
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <Download className="h-4 w-4" />
            Eksport
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-urspi-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-urspi-700"
          >
            <Plus className="h-4 w-4" />
            Yangi murojaat
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: 'Jami', value: appeals.length, color: 'text-slate-900 dark:text-white' },
          { label: 'Yangi', value: appeals.filter((a) => a.status === 'yangi').length, color: 'text-blue-600 dark:text-blue-400' },
          { label: 'Jarayonda', value: appeals.filter((a) => a.status === 'jarayonda').length, color: 'text-amber-600 dark:text-amber-400' },
          { label: 'Kechikkan', value: appeals.filter((a) => a.status === 'kechikkan').length, color: 'text-rose-600 dark:text-rose-400' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
            <p className={`mt-1 text-3xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between dark:border-slate-800">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Talaba, ID yoki hujjat bo'yicha qidirish..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:bg-white focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                type="button"
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === 0
                    ? 'bg-urspi-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              <Filter className="h-3.5 w-3.5" />
              Filtr
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {appeals.map((appeal) => (
            <div
              key={appeal.id}
              className="flex flex-col gap-3 p-6 transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-urspi-100 text-sm font-bold text-urspi-700 dark:bg-urspi-900/50 dark:text-urspi-400">
                  {appeal.student.charAt(0)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-medium text-urspi-600 dark:text-urspi-400">
                      {appeal.id}
                    </span>
                    <StatusBadge status={appeal.status} />
                  </div>
                  <p className="mt-1 font-medium text-slate-900 dark:text-white">{appeal.student}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {getDocumentTitle(appeal.documentType)} · {appeal.department}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 sm:text-right">
                <div>
                  <p className="text-xs text-slate-400">Muddat</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{appeal.deadline}</p>
                </div>
                <div className="w-24">
                  <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Jarayon</span>
                    <span>{appeal.progress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full bg-urspi-500"
                      style={{ width: `${appeal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
