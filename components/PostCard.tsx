"use client"

import React from 'react'
import { PostType } from './Posts'
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PostCard = ({postData}: {postData: PostType}) => {
const router = useRouter()

  return (
        <article className='md:mt-0'>
                <div className="w-full h-[200px] relative">
                    <Image alt={postData.title} src={postData.imageUrl} className='object-cover' fill/>
                </div>
                <div className='mt-4'>
                    <div className="text-blue-600 flex items-center text-sm">
                        <span>{postData.author}</span>
                        <div className="w-1 h-1 rounded full bg-blue-600 mx-2"></div>
                        <span>{postData.createdAt}</span>
                    </div>
                    <Link href={`/post/${postData.id}`}>
                        <div className='flex items-center text-2xl justify-between font-bold mt-3'>
                                <h2>{postData.title}</h2>
                                <GoArrowUpRight />
                        </div>
                    </Link>
                    <p className='opacity-80 mb-3'>{postData.desc.substring(0, 60)}</p>
                    <span className="text-sm font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 cursor-pointer dark:text-slate-800" onClick={()=> router.push(`/category/?cat=${postData.category}`)}>{postData.category}</span>
                </div>
        </article>
  )
}

export default PostCard