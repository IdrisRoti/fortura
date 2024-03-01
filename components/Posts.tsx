import React from 'react'
import PostCard from './PostCard'

export interface PostType {
    id: string,
    author: string,
    imageUrl: string,
    createdAt: string,
    title: string,
    desc: string,
    category: string,
}

const Posts = ({postsData}:{postsData: PostType[]}) => {
  return (
    <div>
        {postsData && postsData.length > 0 ? (
            <>
            <main className='posts pb-10'>
                {postsData.map((postData)=> <PostCard postData={postData} key={postData.id}/>)}
            </main>
            <hr />
            </>
        ) : (
            <div>No Posts to display :(</div>
        )}
    </div>
  )
}

export default Posts