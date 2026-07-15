import {
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  FileSignature,
  FolderOpen,
  GraduationCap,
  Home,
} from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Talabalik guvohnomasi',
    description: 'Talabalik holatini tasdiqlovchi hujjatni olish',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BookOpen,
    title: "O'quv varaqasi",
    description: "O'quv natijalari va baholar bo'yicha ma'lumot",
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Building2,
    title: "O'qish joyidan ma'lumotnoma",
    description: "O'qish joyi haqida rasmiy ma'lumot olish",
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Award,
    title: "Akademik ma'lumotnoma",
    description: 'Akademik kreditlar va transkript',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Calendar,
    title: 'Dars jadvali',
    description: "Semestr bo'yicha dars jadvalini olish",
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: BarChart3,
    title: "Davomat va o'zlashtirish",
    description: "Davomat va o'zlashtirish ko'rsatkichlari",
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: FileSignature,
    title: "To'lov-kontrakt shartnoma",
    description: 'Shartnoma nusxalarini olish va tasdiqlash',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Home,
    title: 'Turar joy arizasi',
    description: 'Yotoqxona va turar joyga ariza berish',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FolderOpen,
    title: 'Aylanma varaqalar',
    description: 'Raqamlashtirilgan aylanma hujjatlarni olish',
    color: 'from-slate-500 to-slate-600',
  },
]

export default function Services() {
  return (
    <section id="xizmatlar" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-urspi-600">
            Xizmatlar
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Registrator ofisi xizmatlari
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Talabalar va xodimlar uchun mavjud bo'lgan barcha raqamlashtirilgan
            hujjat xizmatlari
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-lg hover:ring-urspi-200"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-urspi-50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
