
import axios from 'axios';
import React from 'react'

import { PostType } from './Posts';
import RecentPostCard from './RecentPostCard';
import FirstRecentPost from './FirstRecentPost';

const getData =async ()=> {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`)
    return res.data;
 }

 


const RecentPosts = async () => {
    const posts:PostType[] = await getData()

  return (
    <section className="px-2 mt-12">
        <h2 className="text-2xl">Recent blog Posts</h2>
        <div className="md:grid md:grid-cols-2 md:items-start mt-4">
            {/* RECENT POST 1 */}
            <FirstRecentPost post={posts[0]} />
            <div className='md:ml-4'>
                {/* RECENT POST 2 */}
            <div className='mb-4'><RecentPostCard post={posts[1]}/></div>
                {/* RECENT POST 3 */}
                <RecentPostCard post={posts[2]}/>
            </div>
        </div>
        <hr className='mt-5 mb-5' />
    </section>
  )
}

export default RecentPosts