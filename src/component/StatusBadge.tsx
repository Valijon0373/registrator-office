import type { AppealStatus } from '../dashboard/types'

const statusConfig: Record<
  AppealStatus,
  { label: string; className: string }
> = {
  yangi: {
    label: 'Yangi',
    className: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  },
  jarayonda: {
    label: 'Jarayonda',
    className: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  },
  tugallangan: {
    label: 'Tugatilgan',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  },
  kechikkan: {
    label: 'Kechikkan',
    className: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  },
}

interface StatusBadgeProps {
  status: AppealStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${config.className}`}
    >
      {config.label}
    </span>
  )
}
