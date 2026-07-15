import { Bell, Globe, Lock, Palette, Save, Shield, User, Users } from 'lucide-react'
import { useState } from 'react'

const tabs = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'notifications', label: 'Bildirishnomalar', icon: Bell },
  { id: 'security', label: 'Xavfsizlik', icon: Shield },
  { id: 'system', label: 'Tizim', icon: Globe },
]

export default function Sozlamalar() {
  const [activeTab, setActiveTab] = useState('profile')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Sozlamalar</h1>
        <p className="mt-1 text-sm text-slate-500">
          Tizim va shaxsiy sozlamalarni boshqarish
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-urspi-50 text-urspi-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className={`h-4 w-4 ${activeTab === tab.id ? 'text-urspi-600' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900">Profil sozlamalari</h2>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-urspi-100">
                    <User className="h-8 w-8 text-urspi-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Admin</p>
                    <p className="text-sm text-slate-500">Registrator ofisi xodimi</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Ism</label>
                    <input type="text" defaultValue="Admin" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" defaultValue="admin@urspi.uz" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Telefon</label>
                    <input type="tel" defaultValue="+998 90 123 45 67" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Bo'lim</label>
                    <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500">
                      <option>Registrator ofisi</option>
                      <option>Dekanat</option>
                      <option>Buxgalteriya</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">Bildirishnomalar</h2>
                {[
                  { label: 'Yangi murojaatlar', desc: 'Yangi murojaat kelganda xabar berish' },
                  { label: 'Muddat ogohlantirishlari', desc: "Muddati yaqinlashganda ogohlantirish" },
                  { label: 'Hujjat holati', desc: 'Hujjat holati o\'zgarganda xabar' },
                  { label: 'Email bildirishnomalar', desc: 'Email orqali xabar yuborish' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
                    <div>
                      <p className="font-medium text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-urspi-600 peer-checked:after:translate-x-full" />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900">Xavfsizlik</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Joriy parol</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Yangi parol</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Parolni tasdiqlash</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20" />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-medium text-amber-800">Ikki bosqichli autentifikatsiya</p>
                  <p className="mt-1 text-xs text-amber-700">Qo'shimcha xavfsizlik uchun 2FA ni yoqing</p>
                  <button type="button" className="mt-3 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-700">
                    Yoqish
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900">Tizim sozlamalari</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Til</label>
                    <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500">
                      <option>O'zbek (Lotin)</option>
                      <option>O'zbek (Kirill)</option>
                      <option>Русский</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Vaqt zonasi</label>
                    <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500">
                      <option>Toshkent (UTC+5)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Palette, label: 'Qorong\'u rejim', enabled: false },
                    { icon: Users, label: 'Ko\'p foydalanuvchi rejimi', enabled: true },
                    { icon: Globe, label: 'Avtomatik yangilanish', enabled: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">{item.label}</span>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" defaultChecked={item.enabled} className="peer sr-only" />
                        <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-urspi-600 peer-checked:after:translate-x-full" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-6">
              {saved && (
                <span className="text-sm font-medium text-emerald-600">Saqlandi!</span>
              )}
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 rounded-xl bg-urspi-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-urspi-700"
              >
                <Save className="h-4 w-4" />
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
