interface MonitoringChartProps {
  data: Array<{ day: string; received: number; completed: number }>
}

export default function MonitoringChart({ data }: MonitoringChartProps) {
  const maxValue = Math.max(
    ...data.flatMap((d) => [d.received, d.completed]),
    1,
  )

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Haftalik monitoring
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Qabul qilingan va tugatilgan murojaatlar
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-urspi-500" />
            <span className="text-slate-600 dark:text-slate-300">Qabul qilingan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-600 dark:text-slate-300">Tugatilgan</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2" style={{ height: 180 }}>
        {data.map((item) => {
          const receivedHeight = (item.received / maxValue) * 100
          const completedHeight = (item.completed / maxValue) * 100

          return (
            <div
              key={item.day}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div className="flex w-full items-end justify-center gap-1" style={{ height: 140 }}>
                <div
                  className="w-3 rounded-t-md bg-gradient-to-t from-urspi-600 to-urspi-400 transition-all hover:opacity-80 sm:w-4"
                  style={{ height: `${receivedHeight}%`, minHeight: 4 }}
                  title={`Qabul: ${item.received}`}
                />
                <div
                  className="w-3 rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all hover:opacity-80 sm:w-4"
                  style={{ height: `${completedHeight}%`, minHeight: 4 }}
                  title={`Tugatilgan: ${item.completed}`}
                />
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.day}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 dark:border-slate-800">
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {data.reduce((s, d) => s + d.received, 0)}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Jami qabul</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {data.reduce((s, d) => s + d.completed, 0)}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Jami tugatilgan</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-urspi-600 dark:text-urspi-400">
            {Math.round(
              (data.reduce((s, d) => s + d.completed, 0) /
                data.reduce((s, d) => s + d.received, 0)) *
                100,
            )}
            %
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Samaradorlik</p>
        </div>
      </div>
    </div>
  )
}
