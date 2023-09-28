import Link from 'next/link'
import { useRouter } from "next/router"

import { ToggleColorModeButton } from '../components/ToggleColorModeButton'

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className='w-full flex justify-between pt-6 pb-16 px-4 md:px-0'>
      <nav className='flex gap-4'>
        <Link
          href='/'
          className={`transition-all ${asPath === '/' ? 'text-neutral-800 dark:text-white underline' : 'text-neutral-500 dark:text-neutral-200'} hover:text-neutral-800 dark:hover:text-white hover:underline underline-offset-8 decoration-neutral-200 dark:decoration-neutral-600`}
        >
          home
        </Link>
        <Link
          href='/blog'
          className={`transition-all ${asPath.startsWith('/blog') ? 'text-neutral-800 dark:text-white underline' : 'text-neutral-500 dark:text-neutral-200'} hover:text-neutral-800 dark:hover:text-white hover:underline underline-offset-8 decoration-neutral-200 dark:decoration-neutral-600`}
        >
          blog
        </Link>
        <Link
          href='/portfolio'
          className={`transition-all ${asPath === '/portfolio' ? 'text-neutral-800 dark:text-white underline' : 'text-neutral-500 dark:text-neutral-200'} hover:text-neutral-800 dark:hover:text-white hover:underline underline-offset-8 decoration-neutral-200 dark:decoration-neutral-600`}
        >
          portfolio
        </Link>
      </nav>
      <ToggleColorModeButton />
    </header>
  )
}