import { useState } from 'react'
import type { Zikr } from '../types'

interface Props {
  zikr: Zikr
  index: number
  total: number
}

export default function ZikrCard({ zikr, index, total }: Props) {
  const [count, setCount] = useState(0)
  const done = count >= zikr.count

  function handleTap() {
    if (!done) setCount((c) => c + 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className={`zikr-card ${done ? 'zikr-card--done' : ''}`}>
      <div className="zikr-card__meta">
        <span className="zikr-card__index">{index} / {total}</span>
        {done && <span className="zikr-card__badge">تم ✓</span>}
      </div>

      <p className="zikr-card__text">{zikr.text}</p>

      {zikr.description && (
        <p className="zikr-card__bless">{zikr.description}</p>
      )}

      {zikr.reference && (
        <p className="zikr-card__reference">{zikr.reference}</p>
      )}

      <div className="zikr-card__footer">
        <button
          className={`counter-btn ${done ? 'counter-btn--done' : ''}`}
          onClick={handleTap}
          disabled={done}
          aria-label="عد ذكرًا"
        >
          <span className="counter-btn__count">{count}</span>
          <span className="counter-btn__total">/ {zikr.count}</span>
        </button>

        {done && (
          <button className="reset-btn" onClick={handleReset} aria-label="إعادة">
            ↺
          </button>
        )}
      </div>
    </div>
  )
}
