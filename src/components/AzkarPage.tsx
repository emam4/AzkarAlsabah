import sabahData from '../../AzkarAlsabah.json'
import masaaData from '../../AzkarAlMasaa.json'
import type { AzkarCategory, Zikr } from '../types'
import ZikrCard from './ZikrCard'

interface Props {
  category: AzkarCategory
}

export default function AzkarPage({ category }: Props) {
  const data: Zikr[] = category === 'sabah' ? sabahData : masaaData
  const total = data.length

  return (
    <div className="azkar-page">
      <div className="azkar-list">
        {data.map((zikr, index) => (
          <ZikrCard
            key={zikr.id}
            zikr={zikr}
            index={index + 1}
            total={total}
          />
        ))}
      </div>
    </div>
  )
}
