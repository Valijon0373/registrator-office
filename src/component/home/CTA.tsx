export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-urspi-700 via-urspi-600 to-urspi-800 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          UrSPI bilan ishlashni boshlang
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-urspi-100">
          Talabalar murojaatlarini monitoring qiling, hujjatlarni raqamlashtiring
          va bo'limlar o'rtasida samarali ishlang.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#xizmatlar"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-urspi-700 shadow-lg transition-all hover:bg-urspi-50"
          >
            Xizmatlarni ko'rish
          </a>
        </div>
      </div>
    </section>
  )
}
