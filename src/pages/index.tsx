import { Header } from "@/components/Header"
import { getPages } from '../utils/getPages'
import { RichText } from '../components/RichText'

export default function Home({ data }: any) {
  if (!data) return
  const { page } = JSON.parse(data)

  return (
    <div className='max-w-2xl mx-auto my-8'>
      <Header />
      <main className="px-4 md:px-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-8">
          Welcome to <span className="text-blue-600 dark:text-blue-300">vitor's blog</span>! 👋
        </h1>
        <article className="prose prose-neutral dark:prose-invert">
          <RichText content={page.introduction.raw} />
        </article>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const pages = await getPages()

  return {
    props: {
      data: JSON.stringify(pages) || null
    }
  }
}