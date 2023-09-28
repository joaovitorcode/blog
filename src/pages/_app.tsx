import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

import { DarkModeContextProvider } from '../context/DarkModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <DarkModeContextProvider>
        <Head>
          <title>Vitor's Blog</title>
        </Head>
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </div>
  )
}
