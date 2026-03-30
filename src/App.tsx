import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AzkarPage from './components/AzkarPage'
import Header from './components/Header'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app">
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Routes>
          <Route path="/morning" element={<AzkarPage category="sabah" />} />
          <Route path="/evening" element={<AzkarPage category="masaa" />} />
          <Route path="*" element={<Navigate to="/morning" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
