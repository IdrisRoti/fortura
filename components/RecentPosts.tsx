import { posts } from '@/data/data'
import Image from 'next/image'
import React from 'react'

import { GoArrowUpRight } from "react-icons/go";


const RecentPosts = () => {
  return (
    <section className="px-2 mt-6">
        <h2 className="text-2xl">Recent blog Posts</h2>
        <div className="md:grid md:grid-cols-2 md:items-start mt-4">
            {/* RECENT POST 1 */}
            <article>
                <div className="w-full md:min-h-[260px] h-[200px]  relative">
                    <Image alt={posts[0].title} src={posts[0].imageUrl} className='object-cover' fill/>
                </div>
                <div className='mt-4'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[0].author}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{posts[0].createdAt}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[0].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[0].desc}</p>
                    <small className="text-sm font-bold px-2 py-1 bg-red-100 dark:bg-red-300 dark:text-slate-800 rounded-full">{posts[0].category}</small>
                </div>
            </article>
            <div className='md:ml-4 '>
                {/* RECENT POST 2 */}
            <article className='mt-4 md:mt-0 md:flex'>
                <div className="w-full h-[200px] md:flex-1 relative md:mr-4">
                    <Image alt={posts[1].title} src={posts[1].imageUrl} className='object-cover' fill/>
                </div>
                <div className='mt-4 md:mt-0 md:flex-1'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[1].author}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{posts[1].createdAt}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[1].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[1].desc}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 dark:text-slate-800">{posts[1].category}</span>
                </div>
            </article>
                {/* RECENT POST 3 */}
            <article className='mt-4 md:flex'>
                <div className="w-full h-[200px] md:flex-1 relative md:mr-4">
                    <Image alt={posts[2].title} src={posts[2].imageUrl} className='object-cover' fill/>
                </div>
                <div className='mt-4 md:mt-0 md:flex-1'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{posts[2].author}</span>
                        <div className="w-2 h-2 rounded full bg-blue-600 mx-2"></div>
                        <span>{posts[2].createdAt}</span>
                    </div>
                    <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{posts[2].title}</h2>
                         <GoArrowUpRight />
                    </div>
                    <p className='opacity-80 mb-3'>{posts[2].desc}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 dark:text-slate-800">{posts[2].category}</span>
                </div>
            </article>
            </div>
        </div>
        <hr className='mt-5 mb-5' />
    </section>
  )
}

export default RecentPosts