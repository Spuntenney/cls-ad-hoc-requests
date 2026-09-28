import { BarChart3, ClipboardList, Files, LayoutGrid, type LucideIcon } from 'lucide-react'

export const APP_NAME = 'AdHoc Requests'

export const DEFAULT_LOGO_URL =
  'https://cls-public-docs.s3.us-east-2.amazonaws.com/CLS%2BLiving%2BLogos_CLS%2BKnockout%2BStacked%2BKO%2B(WHITE).png'

export const logoUrl = import.meta.env.VITE_CLS_LIVING_LOGO_URL || DEFAULT_LOGO_URL

export const sampleUser = {
  name: 'Avery Cole',
  role: 'Manager',
  initial: 'A',
}

export type NavItem = {
  to: string
  label: string
  icon: LucideIcon
}

export const sampleNav: NavItem[] = [
  { to: '/sample-1', label: 'Sample 1', icon: LayoutGrid },
  { to: '/sample-2', label: 'Sample 2', icon: Files },
  { to: '/sample-3', label: 'Sample 3', icon: ClipboardList },
  { to: '/sample-4', label: 'Sample 4', icon: BarChart3 },
]

export const pageTitles: Record<string, string> = {
  '/sample-1': 'Sample 1',
  '/sample-2': 'Sample 2',
  '/sample-3': 'Sample 3',
  '/sample-4': 'Sample 4',
  '/admin': 'Admin',
}
