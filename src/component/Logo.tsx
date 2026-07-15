import logo from '../assets/logo1.jpg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  title?: React.ReactNode
  subtitle?: React.ReactNode
  theme?: 'light' | 'dark'
  direction?: 'row' | 'col'
}

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
  xl: 'h-32 w-32',
}

const titleSizeMap = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-2xl',
  xl: 'text-4xl',
}

export default function Logo({
  size = 'md',
  showText = true,
  title = 'UrSPI',
  subtitle = 'urspi.uz',
  theme = 'dark',
  direction = 'row',
}: LogoProps) {
  const titleColor = theme === 'light' ? 'text-white' : 'text-slate-900'
  const subtitleColor = theme === 'light' ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className={`flex items-center ${direction === 'col' ? 'flex-col gap-4 text-center' : 'gap-3'}`}>
      <img
        src={logo}
        alt="UrSPI logo"
        className={`${sizeMap[size]} rounded-full object-cover shadow-lg`}
      />
      {showText && (
        <div className={direction === 'col' ? 'flex flex-col items-center' : ''}>
          <p className={`font-bold tracking-tight ${titleSizeMap[size]} ${titleColor}`}>{title}</p>
          {subtitle && (
            <p className={`${direction === 'col' ? 'mt-1 text-sm' : 'text-xs'} ${subtitleColor}`}>{subtitle}</p>
          )}
        </div>
      )}
    </div>
  )
}
