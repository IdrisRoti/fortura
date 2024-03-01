import React from 'react'
import Posts from '@/components/Posts'

import { posts } from '@/data/data'
import Pagination from './Pagination'

const AllBlogs = () => {
  return (
    <section className='mt-[3rem] p-2'>
      <h2 className='mb-4 text-2xl'>All blog posts</h2>
      <Posts postsData={posts}/>
      <Pagination />
    </section>
  )
}

export default AllBlogs