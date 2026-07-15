import logo from '../assets/logo1.jpg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  subtitle?: string
  theme?: 'light' | 'dark'
}

const sizeMap = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
}

const titleSizeMap = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
}

export default function Logo({
  size = 'md',
  showText = true,
  subtitle = 'urspi.uz',
  theme = 'dark',
}: LogoProps) {
  const titleColor = theme === 'light' ? 'text-white' : 'text-slate-900'
  const subtitleColor = theme === 'light' ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="UrSPI logo"
        className={`${sizeMap[size]} rounded-xl object-cover shadow-lg ring-1 ring-white/10`}
      />
      {showText && (
        <div>
          <p className={`font-bold ${titleSizeMap[size]} ${titleColor}`}>UrSPI</p>
          {subtitle && (
            <p className={`text-xs ${subtitleColor}`}>{subtitle}</p>
          )}
        </div>
      )}
    </div>
  )
}
