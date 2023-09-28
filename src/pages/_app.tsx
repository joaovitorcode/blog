import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { DarkModeContextProvider } from '../context/DarkModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <DarkModeContextProvider>
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </div>
  )
}
