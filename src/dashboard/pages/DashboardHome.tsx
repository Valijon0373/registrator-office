import AppealsTable from '../../component/AppealsTable'
import DepartmentWorkflow from '../../component/DepartmentWorkflow'
import DocumentTypes from '../../component/DocumentTypes'
import MonitoringChart from '../../component/MonitoringChart'
import QuickActions from '../../component/QuickActions'
import StatCard from '../../component/StatCard'
import {
  appeals,
  departments,
  documentCategories,
  stats,
  weeklyStats,
} from '../data'

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-urspi-700 via-urspi-600 to-urspi-800 p-6 text-white shadow-lg shadow-urspi-500/20 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-urspi-100">
              UrSPI — Registrator ofisi
            </p>
            <h2 className="mt-1 text-2xl font-bold lg:text-3xl">
              Elektron hujjat aylanishi tizimi
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-urspi-100">
              Talabalar murojaatlarini o'z vaqtida ko'rib chiqish va bo'limlar
              o'rtasida yagona hujjat aylanishini monitoring qilish
            </p>
          </div>
          <div className="flex shrink-0 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">97%</p>
              <p className="text-xs text-urspi-200">Samaradorlik</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">2.4k</p>
              <p className="text-xs text-urspi-200">Kunlik trafik</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">7</p>
              <p className="text-xs text-urspi-200">Ulangan bo'lim</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MonitoringChart data={weeklyStats} />
        </div>
        <QuickActions />
      </div>

      <DocumentTypes categories={documentCategories} />

      <div className="grid gap-6 xl:grid-cols-5">
        <div className="xl:col-span-2">
          <DepartmentWorkflow departments={departments} />
        </div>
        <div className="xl:col-span-3">
          <AppealsTable appeals={appeals} />
        </div>
      </div>
    </div>
  )
}
