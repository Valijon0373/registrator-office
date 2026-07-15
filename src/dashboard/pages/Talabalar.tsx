import { GraduationCap, Mail, Phone, Search, UserPlus } from 'lucide-react'

const students = [
  { id: 'ST-24001', name: 'Abdullayev Jasur', faculty: 'Pedagogika', course: '3-kurs', group: 'P-301', status: 'Faol' },
  { id: 'ST-24002', name: 'Karimova Nodira', faculty: 'Til va adabiyot', course: '2-kurs', group: 'T-205', status: 'Faol' },
  { id: 'ST-24003', name: 'Rahimov Bobur', faculty: 'Ijtimoiy fanlar', course: '4-kurs', group: 'I-401', status: 'Faol' },
  { id: 'ST-24004', name: 'Saidova Malika', faculty: 'Psixologiya', course: '1-kurs', group: 'P-101', status: 'Faol' },
  { id: 'ST-24005', name: 'Toshpulatov Alisher', faculty: 'Matematika', course: '3-kurs', group: 'M-302', status: 'Akademik ta\'til' },
  { id: 'ST-24006', name: 'Usmonova Dilnoz', faculty: 'Tarix', course: '2-kurs', group: 'T-210', status: 'Faol' },
  { id: 'ST-24007', name: 'Xolmatov Sanjar', faculty: 'Jismoniy tarbiya', course: '4-kurs', group: 'J-402', status: 'Faol' },
  { id: 'ST-24008', name: 'Ergasheva Feruza', faculty: 'Xalqaro aloqalar', course: '3-kurs', group: 'X-301', status: 'Faol' },
]

const faculties = ['Barcha fakultetlar', 'Pedagogika', 'Til va adabiyot', 'Matematika', 'Psixologiya']

export default function Talabalar() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Talabalar</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Talabalar ro'yxati va ma'lumotlar bazasi
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-urspi-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-urspi-700"
        >
          <UserPlus className="h-4 w-4" />
          Talaba qo'shish
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Jami talabalar', value: '4,832', icon: GraduationCap },
          { label: 'Faol talabalar', value: '4,756', icon: UserPlus },
          { label: 'Yangi (2026)', value: '1,240', icon: Mail },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-urspi-50 dark:bg-urspi-900/50">
              <item.icon className="h-6 w-6 text-urspi-600 dark:text-urspi-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-6 lg:flex-row lg:items-center dark:border-slate-800">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Ism, ID yoki guruh bo'yicha qidirish..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-urspi-500 focus:bg-white focus:ring-2 focus:ring-urspi-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
            />
          </div>
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-urspi-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
            {faculties.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">F.I.O</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Fakultet</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Kurs</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Guruh</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Holat</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Aloqa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {students.map((student) => (
                <tr key={student.id} className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-mono text-sm text-urspi-600 dark:text-urspi-400">{student.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-urspi-100 text-xs font-bold text-urspi-700 dark:bg-urspi-900/50 dark:text-urspi-400">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{student.faculty}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{student.course}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{student.group}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        student.status === 'Faol'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button type="button" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-urspi-600 dark:hover:bg-slate-800 dark:hover:text-urspi-400">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button type="button" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-urspi-600 dark:hover:bg-slate-800 dark:hover:text-urspi-400">
                        <Phone className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
