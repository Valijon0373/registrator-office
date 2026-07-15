export type AppealStatus = 'yangi' | 'jarayonda' | 'tugallangan' | 'kechikkan'

export type DocumentType =
  | 'talabalik_guvohnomasi'
  | 'oquv_varaqasi'
  | 'malumotnoma'
  | 'akademik_malumotnoma'
  | 'dars_jadvali'
  | 'davomat'
  | 'shartnoma'
  | 'turar_joy'
  | 'aylanma_varaqa'

export interface Appeal {
  id: string
  student: string
  faculty: string
  documentType: DocumentType
  department: string
  status: AppealStatus
  createdAt: string
  deadline: string
  progress: number
}

export interface StatItem {
  label: string
  value: number
  change: number
  icon: 'FileText' | 'Clock' | 'CheckCircle' | 'AlertTriangle'
  color: string
}

export interface Department {
  id: string
  name: string
  shortName: string
  pending: number
  completed: number
  color: string
}

export interface DocumentCategory {
  type: DocumentType
  title: string
  description: string
  count: number
  icon: string
  color: string
}
