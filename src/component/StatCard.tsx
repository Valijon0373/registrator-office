import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
} from 'lucide-react'

const iconMap = {
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
} as const

interface StatCardProps {
  label: string
  value: number
  change: number
  icon: keyof typeof iconMap
  color: string
}

const colorMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  amber: 'from-amber-500 to-amber-600',
  emerald: 'from-emerald-500 to-emerald-600',
  rose: 'from-rose-500 to-rose-600',
}

export default function StatCard({
  label,
  value,
  change,
  icon,
  color,
}: StatCardProps) {
  const Icon = iconMap[icon] ?? FileText
  const gradient = colorMap[color] ?? colorMap.blue

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-md hover:ring-slate-300/60">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value.toLocaleString('uz-UZ')}
          </p>
          <p
            className={`mt-2 text-sm font-medium ${
              change >= 0 ? 'text-emerald-600' : 'text-rose-600'
            }`}
          >
            {change >= 0 ? '+' : ''}
            {change}% o'tgan haftaga nisbatan
          </p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  )
}
