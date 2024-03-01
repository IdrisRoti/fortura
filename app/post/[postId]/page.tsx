import Comments from '@/components/Comments'
import Image from 'next/image'
import React from 'react'

const SinglePost = () => {
  return (
    <div className='p-2 md:p-4 max-w-[1200px] mx-auto md:pt-[80px] sm:pt-[100px] pt-[70px]'>
        <div className='w-full h-[400px] relative rounded-2xl overflow-hidden'>
            <Image src={"/sport.jpg"} className="object-cover" fill alt="post image"/>

             <div className='absolute bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[transparent] w-full h-full'>
                <div className='absolute bottom-0 p-4 text-white'>
                  <h2 className='text-4xl'>All the world's waiting for you</h2>
                  <small className='flex items-center my-2 opacity-80'>By Admin <div className='w-1 h-1 rounded-full bg-white mx-1'></div> August 24 2018</small>
                </div>
             </div>
        </div>
        <div className='mt-4'>
            <div className='my-6'><span className='font-bold text-4xl'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque voluptatem cumque molestias excepturi accusamus culpa consequatur voluptates ipsum, consequuntur, sed harum reiciendis quasi non odio praesentium numquam aliquid ratione similique voluptatum?
            <p className='my-10'> A, consequuntur distinctio deserunt mollitia optio dolore fuga dolores natus eius harum officiis, nostrum nobis eveniet. Exercitationem optio minima odit at ea dicta tempore quia adipisci, eum ipsa. Consectetur eaque laudantium sequi perferendis vel perspiciatis optio, veniam, ipsum omnis aperiam deserunt repudiandae sunt necessitatibus rem, saepe maxime non praesentium! Nemo iure
            dolores blanditiis deserunt recusandae quae atque veritatis vitae sint aliquam placeat consequuntur, ducimus quidem officia natus sit?
            </p>
            <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia illum voluptate eos magni obcaecati, deserunt quis consequatur sed natus itaque veritatis impedit eum, cumque, neque esse quaerat fugit magnam repellend</b></div>
            <span className='text-sm font-bold px-2 pt-1 pb-1 bg-red-100 hover:opacity-70 cursor-pointer rounded-full'>Sport</span>
        </div>
        <hr  className='mt-5 mb-6'/>
        <Comments />
    </div>
  )
}

export default SinglePost