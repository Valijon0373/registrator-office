import { NavLink } from 'react-router-dom'
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  Workflow,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Bosh sahifa', path: '/dashboard' },
  { icon: FileText, label: 'Murojaatlar', path: '/dashboard/murojaatlar' },
  { icon: Workflow, label: 'Hujjat aylanishi', path: '/dashboard/hujjat-aylanishi' },
  { icon: Users, label: 'Talabalar', path: '/dashboard/talabalar' },
  { icon: BarChart3, label: 'Hisobotlar', path: '/dashboard/hisobotlar' },
  { icon: Settings, label: 'Sozlamalar', path: '/dashboard/sozlamalar' },
]

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200/80 bg-white lg:block">
      <nav className="flex flex-col gap-1 p-4">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Asosiy
        </p>
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-urspi-50 text-urspi-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`h-5 w-5 ${isActive ? 'text-urspi-600' : 'text-slate-400'}`}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      <div className="mx-4 mt-6 rounded-2xl bg-gradient-to-br from-urspi-600 to-urspi-800 p-4 text-white">
        <p className="text-sm font-semibold">Tizim holati</p>
        <p className="mt-1 text-xs text-urspi-100">Barcha bo'limlar ulangan</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium">Faol ishlamoqda</span>
        </div>
      </div>
    </aside>
  )
}
