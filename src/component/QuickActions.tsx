import { FilePlus, Send, Timer, Zap } from 'lucide-react'

const actions = [
  {
    icon: FilePlus,
    title: 'Yangi murojaat',
    description: 'Talaba murojaatini ro\'yxatga olish',
    color: 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50',
  },
  {
    icon: Send,
    title: 'Hujjat yuborish',
    description: 'Bo\'limga hujjat yo\'naltirish',
    color: 'bg-violet-50 text-violet-600 hover:bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400 dark:hover:bg-violet-900/50',
  },
  {
    icon: Timer,
    title: 'Muddat nazorati',
    description: 'Kechikkan murojaatlarni ko\'rish',
    color: 'bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50',
  },
  {
    icon: Zap,
    title: 'Tezkor hisobot',
    description: 'Kunlik statistika olish',
    color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50',
  },
]

export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Tezkor amallar</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Ko'p ishlatiladigan funksiyalar
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.title}
              type="button"
              className="flex items-start gap-3 rounded-xl border border-slate-100 p-4 text-left transition-all hover:border-slate-200 hover:shadow-sm dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800/50"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${action.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {action.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {action.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
