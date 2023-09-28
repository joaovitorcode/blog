import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta name="description" content="Vitor's Blog" />
        <title>Vitor's Blog</title>
      </Head>
      <body className='bg-neutral-50 dark:bg-neutral-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
