import type { Department } from '../dashboard/types'

interface DepartmentWorkflowProps {
  departments: Department[]
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500',
  violet: 'bg-violet-500',
  indigo: 'bg-indigo-500',
  emerald: 'bg-emerald-500',
  orange: 'bg-orange-500',
  cyan: 'bg-cyan-500',
  rose: 'bg-rose-500',
}

export default function DepartmentWorkflow({
  departments,
}: DepartmentWorkflowProps) {
  const totalPending = departments.reduce((sum, d) => sum + d.pending, 0)
  const totalCompleted = departments.reduce((sum, d) => sum + d.completed, 0)

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Bo'limlar o'rtasida hujjat aylanishi
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Yagona elektron hujjat aylanishi tizimi
        </p>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-700">Kutilmoqda</p>
          <p className="mt-1 text-2xl font-bold text-amber-900">{totalPending}</p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="text-sm font-medium text-emerald-700">Tugatilgan</p>
          <p className="mt-1 text-2xl font-bold text-emerald-900">
            {totalCompleted}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {departments.map((dept) => {
          const total = dept.pending + dept.completed
          const completedPercent = total > 0 ? (dept.completed / total) * 100 : 0
          const barColor = colorMap[dept.color] ?? colorMap.blue

          return (
            <div key={dept.id} className="group">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${barColor}`} />
                  <span className="text-sm font-medium text-slate-700">
                    {dept.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-medium text-amber-600">
                    {dept.pending} kutilmoqda
                  </span>
                  <span className="font-medium text-emerald-600">
                    {dept.completed} tugatilgan
                  </span>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${barColor} transition-all duration-500`}
                  style={{ width: `${completedPercent}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
