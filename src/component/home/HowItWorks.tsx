import { FileText, Search, Send, CheckCircle } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Murojaat yuborish',
    description:
      'Talaba kerakli hujjat turini tanlab, onlayn ariza yuboradi.',
  },
  {
    step: '02',
    icon: Search,
    title: "Ko'rib chiqish",
    description:
      "Registrator ofisi murojaatni qabul qilib, tegishli bo'limga yo'naltiradi.",
  },
  {
    step: '03',
    icon: Send,
    title: 'Hujjat tayyorlash',
    description:
      "Bo'lim xodimlari hujjatni tayyorlab, tizimga yuklaydi.",
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Yetkazib berish',
    description:
      'Tayyor hujjat raqamli shaklda murojaatchiga yetkaziladi.',
  },
]

export default function HowItWorks() {
  return (
    <section id="jarayon" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-urspi-600">
            Jarayon
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Qanday ishlaydi?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Murojaatdan hujjat olishgacha bo'lgan to'liq jarayon
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-urspi-200 via-urspi-400 to-emerald-400 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
                    <Icon className="h-7 w-7 text-urspi-600" />
                  </div>
                  <span className="text-xs font-bold text-urspi-500">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
