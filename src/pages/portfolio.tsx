import Image from 'next/image'

import { Header } from "@/components/Header"
import { getProjects } from '@/utils/getProjects'

export default function Portfolio({ data }: any) {
  if (!data) return
  const { projects } = JSON.parse(data)

  return (
    <div className='max-w-2xl mx-auto my-8'>
      <Header />
      <main className='px-4 md:px-0'>
        <h1 className="text-2xl text-neutral-800 dark:text-white font-bold mb-8">
          See my portfolio
        </h1>
        <section className='flex flex-col gap-8'>
          {projects.map((project: any) => (
            <a key={project.title} target='_blank' href={project.link}>
              <div className="aspect-video relative">
                <Image
                  src={project.image.url}
                  alt=""
                  fill
                  className='absolute rounded-md object-cover'
                />
              </div>
              <p className='text-sm font-medium uppercase text-neutral-800 dark:text-white pt-3'>
                {project.tag.toUpperCase()}
              </p>
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-white pt-2">
                {project.title}
              </h2>
              <p className="text-justify text-neutral-600 dark:text-neutral-400 mt-2">
                {project.description}
              </p>
            </a>))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      data: JSON.stringify(projects) || null
    }
  }
}