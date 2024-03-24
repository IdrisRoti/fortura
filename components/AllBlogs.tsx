import Posts, { PostType } from '@/components/Posts'

export default async function AllBlogs({posts}:{posts: PostType[]}) {

  return (
    <section className='mt-[3rem] p-2'>
      <h2 className='mb-4 text-2xl'>All blog posts</h2>
      <Posts postsData={posts}/>
      {/* <Pagination /> */}
    </section>
  )
}