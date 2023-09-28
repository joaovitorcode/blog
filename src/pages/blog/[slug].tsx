import { Header } from "@/components/Header"
import { getPostBySlug } from '@/utils/getPostBySlug'
import { RichText } from '../../components/RichText'

export default function Post({ data }: any) {
  if (!data) return
  const post = JSON.parse(data)

  return (
    <div className='max-w-2xl mx-auto my-8'>
      <Header />
      <main className="px-4 md:px-0">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
          {post.title}
        </h1>
        <div className='w-full flex justify-between mt-1 mb-8'>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.date}
          </p>
        </div>
        <article className="prose prose-neutral dark:prose-invert">
          <RichText content={post.body.raw} />
        </article>
      </main>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params

  const { post } = await getPostBySlug(slug)

  return {
    props: {
      data: JSON.stringify(post) || null
    }
  }
}