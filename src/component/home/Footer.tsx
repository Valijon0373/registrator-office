import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              O'zbekiston Respublikasi Pedagogika Instituti Registrator ofisi
              elektron hujjat aylanishi tizimi.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Tezkor havolalar</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#bosh"
                  className="text-sm text-slate-600 transition-colors hover:text-urspi-600"
                >
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  href="#xizmatlar"
                  className="text-sm text-slate-600 transition-colors hover:text-urspi-600"
                >
                  Xizmatlar
                </a>
              </li>
              <li>
                <a
                  href="#bolimlar"
                  className="text-sm text-slate-600 transition-colors hover:text-urspi-600"
                >
                  Bo'limlar
                </a>
              </li>
              <li>
                <a
                  href="#jarayon"
                  className="text-sm text-slate-600 transition-colors hover:text-urspi-600"
                >
                  Qanday ishlaydi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Aloqa</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 shrink-0 text-urspi-500" />
                Toshkent sh., UrSPI
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4 shrink-0 text-urspi-500" />
                +998 (71) 000-00-00
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Mail className="h-4 w-4 shrink-0 text-urspi-500" />
                info@urspi.uz
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          © 2026 UrSPI. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}
