import { Bell, Globe, Lock, Palette, Save, Shield, User, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

const tabs = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'notifications', label: 'Bildirishnomalar', icon: Bell },
  { id: 'security', label: 'Xavfsizlik', icon: Shield },
  { id: 'system', label: 'Tizim', icon: Globe },
]

export default function Sozlamalar() {
  const [activeTab, setActiveTab] = useState('profile')
  const [saved, setSaved] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  function showToast(message: string) {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const [settings, setSettings] = useState(() => {
    const savedData = localStorage.getItem('urspi_settings')
    if (savedData) {
      try {
        return JSON.parse(savedData)
      } catch (e) {
        // ignore
      }
    }
    return {
      profile: { name: 'Admin', email: 'admin@urspi.uz', phone: '+998 90 123 45 67', department: 'Registrator ofisi' },
      notifications: { newRequests: true, deadlineWarnings: true, statusChanges: true, emailNotifs: true },
      security: { twoFactorEnabled: false },
      system: { language: "O'zbek (Lotin)", timezone: 'Toshkent (UTC+5)', darkMode: false, multiUser: true, autoUpdate: true }
    }
  })

  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' })

  function handleSave() {
    localStorage.setItem('urspi_settings', JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    if (passwords.new) {
      setPasswords({ current: '', new: '', confirm: '' })
    }
  }

  function updateProfile(key: keyof typeof settings.profile, value: string) {
    setSettings(prev => ({ ...prev, profile: { ...prev.profile, [key]: value } }))
  }

  function updateNotification(key: keyof typeof settings.notifications, value: boolean) {
    setSettings(prev => ({ ...prev, notifications: { ...prev.notifications, [key]: value } }))
  }

  function updateSystem(key: keyof typeof settings.system, value: string | boolean) {
    setSettings(prev => ({ ...prev, system: { ...prev.system, [key]: value } }))
    
    if (key === 'darkMode') {
      if (value) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      showToast(value ? "Qorong'u rejim yoqildi" : "Qorong'u rejim o'chirildi")
    } else if (key === 'multiUser') {
      showToast(value ? "Ko'p foydalanuvchi rejimi yoqildi" : "Ko'p foydalanuvchi rejimi o'chirildi")
    } else if (key === 'autoUpdate') {
      showToast(value ? "Avtomatik yangilanish yoqildi" : "Avtomatik yangilanish o'chirildi")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Sozlamalar</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
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
                    ? 'bg-urspi-50 text-urspi-700 shadow-sm dark:bg-urspi-900/30 dark:text-urspi-300'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`h-4 w-4 ${activeTab === tab.id ? 'text-urspi-600 dark:text-urspi-400' : 'text-slate-400 dark:text-slate-500'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profil sozlamalari</h2>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-urspi-100 dark:bg-urspi-900/50">
                    <User className="h-8 w-8 text-urspi-600 dark:text-urspi-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{settings.profile.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{settings.profile.department} xodimi</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Ism</label>
                    <input type="text" value={settings.profile.name} onChange={e => updateProfile('name', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input type="email" value={settings.profile.email} onChange={e => updateProfile('email', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Telefon</label>
                    <input type="tel" value={settings.profile.phone} onChange={e => updateProfile('phone', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Bo'lim</label>
                    <select value={settings.profile.department} onChange={e => updateProfile('department', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
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
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Bildirishnomalar</h2>
                {[
                  { key: 'newRequests', label: 'Yangi murojaatlar', desc: 'Yangi murojaat kelganda xabar berish' },
                  { key: 'deadlineWarnings', label: 'Muddat ogohlantirishlari', desc: "Muddati yaqinlashganda ogohlantirish" },
                  { key: 'statusChanges', label: 'Hujjat holati', desc: 'Hujjat holati o\'zgarganda xabar' },
                  { key: 'emailNotifs', label: 'Email bildirishnomalar', desc: 'Email orqali xabar yuborish' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-slate-800">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" checked={settings.notifications[item.key as keyof typeof settings.notifications]} onChange={e => updateNotification(item.key as keyof typeof settings.notifications, e.target.checked)} className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-urspi-600 peer-checked:after:translate-x-full dark:bg-slate-700" />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Xavfsizlik</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Joriy parol</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Yangi parol</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" value={passwords.new} onChange={e => setPasswords(p => ({ ...p, new: e.target.value }))} placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Parolni tasdiqlash</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input type="password" value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} placeholder="••••••••" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-500">Ikki bosqichli autentifikatsiya</p>
                  <p className="mt-1 text-xs text-amber-700 dark:text-amber-600">Qo'shimcha xavfsizlik uchun 2FA ni yoqing</p>
                  <button type="button" onClick={() => setSettings(prev => ({ ...prev, security: { twoFactorEnabled: !prev.security.twoFactorEnabled } }))} className={`mt-3 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-colors ${settings.security.twoFactorEnabled ? 'bg-amber-800 hover:bg-amber-900' : 'bg-amber-600 hover:bg-amber-700'}`}>
                    {settings.security.twoFactorEnabled ? 'O\'chirish' : 'Yoqish'}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Tizim sozlamalari</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Til</label>
                    <select value={settings.system.language} onChange={e => updateSystem('language', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                      <option>O'zbek (Lotin)</option>
                      <option>O'zbek (Kirill)</option>
                      <option>Русский</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Vaqt zonasi</label>
                    <select value={settings.system.timezone} onChange={e => updateSystem('timezone', e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-urspi-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                      <option>Toshkent (UTC+5)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { key: 'darkMode', icon: Palette, label: 'Qorong\'u rejim' },
                    { key: 'multiUser', icon: Users, label: 'Ko\'p foydalanuvchi rejimi' },
                    { key: 'autoUpdate', icon: Globe, label: 'Avtomatik yangilanish' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
                        </div>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input type="checkbox" checked={settings.system[item.key as keyof typeof settings.system] as boolean} onChange={e => updateSystem(item.key as keyof typeof settings.system, e.target.checked)} className="peer sr-only" />
                          <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-urspi-600 peer-checked:after:translate-x-full dark:bg-slate-700" />
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-6 dark:border-slate-800">
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

      {toastMessage && (
        <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-xl animate-in slide-in-from-bottom-5 dark:bg-white dark:text-slate-900">
          {toastMessage}
        </div>
      )}
    </div>
  )
}
