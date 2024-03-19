// import { posts } from '@/data/data'
import axios from 'axios';
import Image from 'next/image'
import React from 'react'

import { GoArrowUpRight } from "react-icons/go";
import { PostType } from './Posts';

const getData =async ()=> {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`)
    return res.data;
 }

 


const RecentPosts = async () => {
    const posts:PostType[] = await getData()

    const dateObject1 = new Date(posts[0].createdAt);
    const dateObject2 = new Date(posts[1].createdAt);
    const dateObject3 = new Date(posts[2].createdAt);
    
    const options:Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year:"numeric"
}

const formattedDate1 = dateObject1.toLocaleDateString("en-US", options) 
const formattedDate2 = dateObject2.toLocaleDateString("en-US", options) 
const formattedDate3 = dateObject3.toLocaleDateString("en-US", options) 

  return (
    <section className="px-2 mt-6">
        <h2 className="text-2xl">Recent blog Posts</h2>
        <div className="md:grid md:grid-cols-2 md:items-start mt-4">
            {/* RECENT POST 1 */}
            <article>
                {posts[0].imgUrl && <div className="w-full md:min-h-[260px] h-[200px]  relative">
                    <Image alt={posts[0].title} src={posts[0].imgUrl} className='object-cover' fill/>
                </div>}
                <div className='mt-4'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[0].user.name}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{formattedDate1}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[0].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[0].description}</p>
                    <small className="text-sm font-bold px-2 py-1 bg-red-100 dark:bg-red-300 dark:text-slate-800 rounded-full">{posts[0].catName}</small>
                </div>
            </article>
            <div className='md:ml-4 '>
                {/* RECENT POST 2 */}
            <article className='mt-4 md:mt-0 md:flex'>
                {posts[1].imgUrl && <div className="w-full h-[200px] md:flex-1 relative md:mr-4">
                    <Image alt={posts[1].title} src={posts[1].imgUrl} className='object-cover' fill/>
                </div>}
                <div className='mt-4 md:mt-0 md:flex-1'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[1].user.name}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{formattedDate2}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[1].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[1].description}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 dark:text-slate-800">{posts[1].catName}</span>
                </div>
            </article>
                {/* RECENT POST 3 */}
            <article className='mt-4 md:flex'>
                {posts[2].imgUrl && <div className="w-full h-[200px] md:flex-1 relative md:mr-4">
                    <Image alt={posts[2].title} src={posts[2].imgUrl} className='object-cover' fill/>
                </div>}
                <div className='mt-4 md:mt-0 md:flex-1'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[2].user.name}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{formattedDate3}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[2].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[2].description}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 dark:text-slate-800">{posts[2].catName}</span>
                </div>
            </article>
            </div>
        </div>
        <hr className='mt-5 mb-5' />
    </section>
  )
}

export default RecentPosts