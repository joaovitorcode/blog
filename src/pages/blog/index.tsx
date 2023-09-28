import Link from 'next/link'

import { Header } from "@/components/Header"
import { getPosts } from '@/utils/getPosts'

export default function Blog({ data }: any) {
  if (!data) return
  const { posts } = JSON.parse(data)

  return (
    <div className='max-w-2xl mx-auto my-8'>
      <Header />
      <main className='px-4 md:px-0'>
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-8">
          Read my blog
        </h1>
        <section className='flex flex-col gap-4'>
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <p className="transition-all text-neutral-500 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-white hover:underline underline-offset-4 decoration-neutral-200">
                {post.title}
              </p>
              <div className='w-full flex justify-between mt-1'>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      data: JSON.stringify(posts) || null
    }
  }
}