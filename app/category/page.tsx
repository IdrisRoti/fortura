import Posts from '@/components/Posts'
import React from 'react'
import { posts } from '@/data/data' 
import axios from 'axios';

const getData = async (cat:string)=> {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts?cat=${cat}`);
  return res.data;
}

const page = async ({searchParams}: {searchParams: any}) => {
    const {cat} = searchParams;

    const catPosts = await getData(cat)
    console.log("category post", catPosts)

  return (
    <div className='pt-[70px] max-w-1400px mx-auto p-2'>
        <h2 className='font-bold text-2xl mb-3'><span className='text-blue-600'>{cat}</span> Posts</h2>
        <main>
            <Posts postsData={catPosts}/>
        </main>
    </div>
  )
}

export default page