import {
  BarChart3,
  Building2,
  Calendar,
  FileSignature,
  FileText,
  FolderOpen,
  GraduationCap,
  Home,
} from 'lucide-react'

const iconMap = {
  GraduationCap,
  BookOpen: FileText,
  Building2,
  Award: GraduationCap,
  Calendar,
  BarChart3,
  FileSignature,
  Home,
  FolderOpen,
}

interface DocumentTypesProps {
  categories: Array<{
    type: string
    title: string
    description: string
    count: number
    icon: string
    color: string
  }>
}

const colorStyles: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'hover:border-blue-200' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'hover:border-violet-200' },
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'hover:border-cyan-200' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'hover:border-indigo-200' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'hover:border-orange-200' },
  teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'hover:border-teal-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'hover:border-emerald-200' },
  pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'hover:border-pink-200' },
  slate: { bg: 'bg-slate-100', icon: 'text-slate-600', border: 'hover:border-slate-200' },
}

export default function DocumentTypes({ categories }: DocumentTypesProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Hujjat turlari
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Raqamlashtirilgan hujjatlar bo'yicha statistika
          </p>
        </div>
        <span className="rounded-full bg-urspi-50 px-3 py-1 text-xs font-medium text-urspi-700">
          9 tur
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? FileText
          const style = colorStyles[cat.color] ?? colorStyles.blue

          return (
            <button
              key={cat.type}
              type="button"
              className={`flex items-start gap-4 rounded-xl border border-transparent p-4 text-left transition-all ${style.border} hover:bg-slate-50`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg}`}
              >
                <Icon className={`h-5 w-5 ${style.icon}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {cat.title}
                </p>
                <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                  {cat.description}
                </p>
                <p className="mt-2 text-sm font-bold text-urspi-600">
                  {cat.count} ta
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
