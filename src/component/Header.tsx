import { Link, useNavigate } from 'react-router-dom'
import { Bell, LogOut, Search, User } from 'lucide-react'
import { logout } from '../lib/auth'
import Logo from './Logo'

export default function Header() {
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/admin', { replace: true })
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/dashboard">
          <Logo subtitle="urspi.uz" />
        </Link>

        <div className="hidden flex-1 justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Murojaat, talaba yoki hujjat bo'yicha qidirish..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-urspi-500 focus:bg-white focus:ring-2 focus:ring-urspi-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 sm:block"
          >
            Bosh sahifa
          </Link>
          <button
            type="button"
            className="relative rounded-xl p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
              5
            </span>
          </button>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-urspi-100">
              <User className="h-4 w-4 text-urspi-600" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">Registrator ofisi</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl p-2.5 text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"
            title="Chiqish"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
