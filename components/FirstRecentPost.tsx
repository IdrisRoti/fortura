"use client"

import React from 'react'
import { PostType } from './Posts'
import { GoArrowUpRight } from 'react-icons/go'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const FirstRecentPost = ({post}:{post: PostType}) => {

    const router = useRouter()

    const dateObject = new Date(post.createdAt);
    
    const options:Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year:"numeric"
}

const formattedDate = dateObject.toLocaleDateString("en-US", options) 

  return (
    <article>
                {post.imgUrl && 
                <div className="w-full md:min-h-[260px] h-[200px]  relative">
                    <Image alt={post.title} src={post.imgUrl} className='object-cover' fill/>
                </div>}
                <div className='mt-4'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{post.user.name}</span>
                        <div className="w-1 h-1 rounded full bg-blue-600 mx-2"></div>
                        <span>{formattedDate}</span>
                    </div>
                    <Link href={`/post/${post.slug}`} className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{post.title}</h2>
                         <GoArrowUpRight />
                    </Link>
                    <p className='opacity-80 mb-3 text-sm'>{post.description}</p>
                    <small className="text-sm font-bold px-2 py-1 bg-red-100 dark:bg-red-300 dark:text-slate-800 rounded-full" onClick={()=> router.push(`/category?cat=${post.catName}`)}>{post.catName}</small>
                </div>
            </article>
  )
}

export default FirstRecentPost