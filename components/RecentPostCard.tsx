"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { PostType } from './Posts';
import Link from 'next/link';

const RecentPostCard = ({post}:{post: PostType}) => {

    const router = useRouter()

    const dateObject = new Date(post.createdAt);
    
    const options:Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year:"numeric"
}

const formattedDate = dateObject.toLocaleDateString("en-US", options) 

  return (
    <article className='mt-4 md:mt-0 md:flex'>
    <div className="w-full h-[200px] md:flex-1 relative md:mr-4">
                    <Image alt={post.title} src={post.imgUrl || "@/default-image.jpg"} className='object-cover' fill/>
                </div>
                <div className='mt-4 md:mt-0 md:flex-1'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{post.user.name}</span>
                        <div className="w-1 h- rounded full bg-blue-600 mx-2"></div>
                        <span>{formattedDate}</span>
                    </div>
                    <Link href={`/post/${post.slug}`} className='flex items-center text-2xl justify-between font-bold mt-3'>
                         <h2>{post.title}</h2>
                         <GoArrowUpRight />
                    </Link>
                    <p className='opacity-80 mb-3 text-sm'>{post.description}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 dark:text-slate-800" onClick={()=> router.push(`/category?cat=${post.catName}`)}>{post.catName}</span>
                </div>
            </article>
  )
}

export default RecentPostCard