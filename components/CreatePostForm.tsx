"use client"

import React, { FormEvent, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePostForm (){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handlePost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(title, value, category)
    }

    return(
        <form>
                <input className='w-full outline-none px-2 py-3 focus:bg-slate-100 mb-4 rounded-sm' type="text" placeholder="Post title" onChange={(e)=> setTitle(e.target.value)}/>
                <div>
                <ReactQuill className='h-[50vh] border-none' theme="snow" value={value} onChange={setValue} /> 
                </div>
                <select className='mt-12 w-full bg-slate-100 py-2 px-1 rounded-md outline-none' onChange={(e)=> setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="design">Design</option>
                    <option value="">Select a category</option>
                    <option value="">Select a category</option>
                    <option value="">Select a category</option>
                    <option value="">Select a category</option>
                </select>
                <button className='px-3 py-1 bg-blue-600 text-white font-semibold rounded-sm hover:opacity-80 mt-4' onClick={(e)=>handlePost}>Post</button>
            </form>
    )
}