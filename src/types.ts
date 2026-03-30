export interface Zikr {
  id: number
  category: string
  text: string
  text_without_diacritical: string
  description: string
  count: number
  reference?: string
}

export type AzkarCategory = 'sabah' | 'masaa'
