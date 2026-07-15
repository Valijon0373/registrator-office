import {
  BarChart3,
  Clock,
  FileCheck,
  Shield,
  Users,
  Workflow,
} from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Yagona hujjat aylanishi',
    description:
      "Barcha bo'limlar o'rtasida birlashtirilgan elektron hujjat aylanish tizimi.",
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Clock,
    title: 'Muddat nazorati',
    description:
      "Murojaatlarning o'z vaqtida ko'rib chiqilishini avtomatik kuzatish.",
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: FileCheck,
    title: 'Raqamlashtirish',
    description:
      'Barcha hujjatlarni raqamli formatda qayta ishlash va yetkazib berish.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Monitoring va hisobot',
    description:
      'Real vaqt rejimida statistika va samaradorlik ko\'rsatkichlari.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Users,
    title: 'Talabalar portali',
    description:
      'Talabalar o\'z murojaatlari holatini onlayn kuzatishi mumkin.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Shield,
    title: 'Xavfsizlik',
    description:
      'Hujjatlar xavfsiz saqlanadi va faqat vakolatli xodimlar ko\'ra oladi.',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-urspi-600">
            Afzalliklar
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Nima uchun UrSPI?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Institutning barcha bo'limlarini birlashtiruvchi zamonaviy
            elektron hujjat boshqaruv tizimi
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-urspi-200 hover:shadow-md"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
