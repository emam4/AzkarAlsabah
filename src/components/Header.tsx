import { NavLink, useLocation } from 'react-router-dom'

interface Props {
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export default function Header({ theme, onThemeToggle }: Props) {
  const { pathname } = useLocation()
  const title = pathname === '/evening' ? 'أذكار المساء' : 'أذكار الصباح'

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__controls">
        <nav className="header__tabs">
          <NavLink
            to="/morning"
            className={({ isActive }) => `tab ${isActive ? 'tab--active' : ''}`}
          >
            الصباح
          </NavLink>
          <NavLink
            to="/evening"
            className={({ isActive }) => `tab ${isActive ? 'tab--active' : ''}`}
          >
            المساء
          </NavLink>
        </nav>
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
