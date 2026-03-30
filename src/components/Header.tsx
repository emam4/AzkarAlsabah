import type { AzkarCategory } from '../types'

interface Props {
  category: AzkarCategory
  onCategoryChange: (cat: AzkarCategory) => void
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export default function Header({ category, onCategoryChange, theme, onThemeToggle }: Props) {
  return (
    <header className="header">
      <h1 className="header__title">
        {category === 'sabah' ? 'أذكار الصباح' : 'أذكار المساء'}
      </h1>
      <div className="header__controls">
        <div className="header__tabs">
          <button
            className={`tab ${category === 'sabah' ? 'tab--active' : ''}`}
            onClick={() => onCategoryChange('sabah')}
          >
            الصباح
          </button>
          <button
            className={`tab ${category === 'masaa' ? 'tab--active' : ''}`}
            onClick={() => onCategoryChange('masaa')}
          >
            المساء
          </button>
        </div>
        <button
          className="theme-btn"
          onClick={onThemeToggle}
          aria-label="تبديل الوضع"
          title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
