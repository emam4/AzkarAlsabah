import { useState, useEffect } from 'react'
import AzkarPage from './components/AzkarPage'
import Header from './components/Header'
import type { AzkarCategory } from './types'

type Theme = 'dark' | 'light'

function App() {
  const [category, setCategory] = useState<AzkarCategory>('sabah')
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app">
      <Header
        category={category}
        onCategoryChange={setCategory}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main>
        <AzkarPage key={category} category={category} />
      </main>
    </div>
  )
}

export default App
