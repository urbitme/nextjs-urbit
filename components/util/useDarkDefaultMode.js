import React, { useEffect, useState, useCallback, useContext } from 'react'

//Add className "dark" to root html tag

const DarkModeContext = React.createContext([null, null])

export const DarkModeProvider = (props) => {
  const [isDark, setIsDark] = useState(true)

  // loads the initial dark mode state from local storage or system preference
  useEffect(() => {
    if (localStorage.theme === 'light') {
      setIsDark(false)
    } else {
      setIsDark(true)
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

