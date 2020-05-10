import React, { useState, useEffect } from 'react'
import { ThemeProvider, themes } from 'components/Theming'

// const supportsDarkMode = () =>
//   window.matchMedia('(prefers-color-scheme: dark)').matches === true

function ThemeProviderComponent(props) {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)

  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }

  const { children } = props

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeProviderComponent
