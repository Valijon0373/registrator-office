import { ArrowRight, CheckCircle, FileText, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="bosh"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-urspi-900 to-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-urspi-500/20 via-transparent to-transparent" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-urspi-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-urspi-500/30 bg-urspi-500/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-urspi-200">
                UrSPI elektron hujjat tizimi
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
              Registrator ofisi{' '}
              <span className="bg-gradient-to-r from-urspi-300 to-blue-300 bg-clip-text text-transparent">
                raqamli platformasi
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Talabalar murojaatlarini o'z vaqtida ko'rib chiqish, hujjatlarni
              raqamlashtirish va bo'limlar o'rtasida yagona elektron hujjat
              aylanishini ta'minlovchi zamonaviy tizim.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#xizmatlar"
                className="inline-flex items-center gap-2 rounded-xl bg-urspi-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-urspi-500/30 transition-all hover:bg-urspi-400 hover:shadow-urspi-500/40"
              >
                Xizmatlarni ko'rish
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#jarayon"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Qanday ishlaydi
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: FileText, text: '9 xil hujjat turi' },
                { icon: Shield, text: 'Xavfsiz saqlash' },
                { icon: CheckCircle, text: 'Real vaqt monitoring' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-7 w-7 text-white" />
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">Bugungi statistika</p>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  Faol
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Yangi murojaatlar', value: '47', color: 'text-blue-400' },
                  { label: 'Jarayonda', value: '89', color: 'text-amber-400' },
                  { label: 'Tugatilgan', value: '156', color: 'text-emerald-400' },
                  { label: 'Samaradorlik', value: '97%', color: 'text-urspi-300' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Haftalik jarayon</span>
                  <span>87%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-urspi-500 to-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
