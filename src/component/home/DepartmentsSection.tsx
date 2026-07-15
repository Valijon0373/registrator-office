const departments = [
  {
    name: 'Registrator ofisi',
    role: 'Markaziy boshqaruv va murojaatlarni qabul qilish',
    color: 'border-blue-200 bg-blue-50',
    dot: 'bg-blue-500',
  },
  {
    name: "O'quv-uslubiy boshqarma",
    role: "O'quv jarayoni va dars jadvallarini boshqarish",
    color: 'border-violet-200 bg-violet-50',
    dot: 'bg-violet-500',
  },
  {
    name: 'Dekanatlar',
    role: 'Fakultetlar bo\'yicha talabalar ishlarini ko\'rib chiqish',
    color: 'border-indigo-200 bg-indigo-50',
    dot: 'bg-indigo-500',
  },
  {
    name: 'Buxgalteriya',
    role: "To'lov-kontrakt shartnomalarini qayta ishlash",
    color: 'border-emerald-200 bg-emerald-50',
    dot: 'bg-emerald-500',
  },
  {
    name: 'Marketing va amaliyot',
    role: 'Amaliyot va marketing bo\'yicha hujjatlar',
    color: 'border-orange-200 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    name: 'Ilmiy bo\'lim',
    role: 'Ilmiy ishlar va tadqiqot hujjatlari',
    color: 'border-cyan-200 bg-cyan-50',
    dot: 'bg-cyan-500',
  },
  {
    name: 'Xalqaro aloqalar',
    role: 'Xalqaro hamkorlik va almashinuv hujjatlari',
    color: 'border-rose-200 bg-rose-50',
    dot: 'bg-rose-500',
  },
]

export default function DepartmentsSection() {
  return (
    <section id="bolimlar" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-urspi-600">
              Bo'limlar
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
              Yagona elektron hujjat aylanishi
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              UrSPI tizimi institutning barcha bo'limlarini birlashtirib,
              hujjatlarning tez va shaffof tarzda aylanishini ta'minlaydi.
              Har bir bo'lim o'z vakolati doirasida murojaatlarni ko'rib chiqadi.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-urspi-600 to-urspi-800 p-6 text-white">
              <p className="text-3xl font-bold">7</p>
              <p className="mt-1 text-sm text-urspi-100">Ulangan bo'lim</p>
              <p className="mt-4 text-sm leading-relaxed text-urspi-200">
                Barcha bo'limlar yagona platformada ishlaydi va murojaatlar
                avtomatik ravishda tegishli bo'limga yo'naltiriladi.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className={`flex items-start gap-4 rounded-xl border p-4 transition-all hover:shadow-sm ${dept.color}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`h-3 w-3 rounded-full ${dept.dot}`} />
                  {index < departments.length - 1 && (
                    <div className="mt-1 h-full w-px bg-slate-200" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{dept.name}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{dept.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
