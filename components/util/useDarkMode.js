import React, { useEffect, useState, useCallback, useContext } from 'react'

const DarkModeContext = React.createContext([null, null])

export const DarkModeProvider = (props) => {
  const [isDark, setIsDark] = useState(false)

  // loads the initial dark mode state from local storage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      localStorage.theme = 'dark'
      document.querySelector('html').classList.add('dark')
    } else {
      localStorage.theme = 'light'
      document.querySelector('html').classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = useCallback(() => {
    setIsDark(!isDark)
  }, [isDark])

  return <DarkModeContext.Provider value={[isDark, toggleDarkMode]} {...props} />
}

export const useDarkMode = () => {
  // [ isDark, toggleDarkMode ]
  return useContext(DarkModeContext)
}

