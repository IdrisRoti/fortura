import React from 'react'
import Posts from '@/components/Posts'

import Pagination from './Pagination'
import axios from 'axios'

const getData =async ()=> {
   const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`)
   return res.data;
}

export default async function AllBlogs() {

  const posts = await getData()

  return (
    <section className='mt-[3rem] p-2'>
      <h2 className='mb-4 text-2xl'>All blog posts</h2>
      <Posts postsData={posts}/>
      {/* <Pagination /> */}
    </section>
  )
}