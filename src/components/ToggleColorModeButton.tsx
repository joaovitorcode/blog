import { useEffect } from 'react'
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'
import { useDarkMode } from '../hooks/useDarkMode'

export function ToggleColorModeButton() {
  const { isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    isDark === 'dark'
      ? htmlElement?.classList.add('dark')
      : htmlElement?.classList.remove('dark')
  }, [isDark])

  useEffect(() => {
    let localStorage = window.localStorage.getItem('theme')
    setIsDark(localStorage!)
  }, [setIsDark])

  const switchTheme = () => {
    const theme = isDark === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', theme)
    setIsDark(theme)
  }

  return (
    <button
      onClick={switchTheme}
      aria-label={`Modo ${isDark === 'dark' ? "claro": "escuro"}`}
      className='flex gap-4 transition-all text-neutral-500 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-white'
    >
      {isDark === 'dark' ? (<>
        turn on
        <BsLightbulb className="w-6 h-6" />
      </>) : (<>
        turn off
        <BsLightbulbOff className="w-6 h-6" />
      </>)}
    </button>
  )
}