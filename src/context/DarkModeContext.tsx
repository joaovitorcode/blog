import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from 'react'

interface DarkModeContextProps {
  isDark: string
  setIsDark: Dispatch<SetStateAction<string>>
}

interface DarkModeContextProviderProps {
  children: ReactNode
}

const DEFAULT_VALUE = {
  isDark: '',
  setIsDark: () => {},
}

const DarkModeContext = createContext<DarkModeContextProps>(DEFAULT_VALUE)

const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDark, setIsDark] = useState(DEFAULT_VALUE.isDark)

  const value = { isDark, setIsDark }

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeContextProvider }