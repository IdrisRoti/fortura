import Posts from '@/components/Posts'
import React from 'react'
import { posts } from '@/data/data' 

const page = ({searchParams}: {searchParams: any}) => {
    const {cat} = searchParams;

  return (
    <div className='pt-[70px] max-w-1400px mx-auto p-2'>
        <h2 className='font-bold text-2xl mb-3'><span className='text-blue-600'>{cat}</span> Posts</h2>
        <main>
            <Posts postsData={posts}/>
        </main>
    </div>
  )
}

export default page