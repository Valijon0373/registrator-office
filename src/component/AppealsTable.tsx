import { ArrowRight, Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Appeal } from '../dashboard/types'
import { documentCategories } from '../dashboard/data'
import StatusBadge from './StatusBadge'

interface AppealsTableProps {
  appeals: Appeal[]
}

function getDocumentTitle(type: string) {
  return documentCategories.find((d) => d.type === type)?.title ?? type
}

export default function AppealsTable({ appeals }: AppealsTableProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            So'nggi murojaatlar
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Talabalar murojaatlarini monitoring qilish
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Qidirish..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-urspi-500 focus:bg-white focus:ring-2 focus:ring-urspi-500/20 sm:w-56 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Filter className="h-4 w-4" />
            Filtr
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Talaba
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Hujjat
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Bo'lim
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Holat
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Jarayon
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Muddat
              </th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {appeals.map((appeal) => (
              <tr
                key={appeal.id}
                className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="font-mono text-sm font-medium text-urspi-600 dark:text-urspi-400">
                    {appeal.id}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {appeal.student}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{appeal.faculty}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {getDocumentTitle(appeal.documentType)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {appeal.department}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={appeal.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          appeal.progress === 100
                            ? 'bg-emerald-500'
                            : appeal.status === 'kechikkan'
                              ? 'bg-rose-500'
                              : 'bg-urspi-500'
                        }`}
                        style={{ width: `${appeal.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {appeal.progress}%
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {appeal.deadline}
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-urspi-600 dark:hover:bg-slate-800 dark:hover:text-urspi-400"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 dark:border-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Jami <span className="font-medium text-slate-700 dark:text-slate-300">{appeals.length}</span>{' '}
          ta murojaat ko'rsatilmoqda
        </p>
        <Link
          to="/dashboard/murojaatlar"
          className="text-sm font-medium text-urspi-600 hover:text-urspi-700 dark:text-urspi-400 dark:hover:text-urspi-300"
        >
          Barchasini ko'rish →
        </Link>
      </div>
    </div>
  )
}
