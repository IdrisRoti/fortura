"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";

import { catType } from "./Navbar";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";

export default function CreatePostForm() {
  const [categories, setCategories] = useState<catType[]>([]);
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  // const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState(""); //from cloudinary
  const [publicId, setPublicId] = useState(""); //required to delete image on cloudinary when a post is deleted

  const getCategories = async () => {
    await axios
      .get("/api/category")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleImageUpload = (result:CloudinaryUploadWidgetResults)=>{
    const info = result.info as Object;
    if("secure_url" in info && "public_id" in info){
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setImgUrl(url)
      setPublicId(public_id)
      
    }
  }

  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   setLoading(true)
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false)
    // }
    console.log(title, value, category, imgUrl, publicId, description);
  };

  return (
    <form onSubmit={handlePost}>
      <input
        className="w-full outline-none px-2 py-3 focus:bg-slate-100 mb-4 rounded-sm"
        type="text"
        placeholder="Post title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full outline-none px-2 py-3 focus:bg-slate-100 mb-4 rounded-sm"
        type="text"
        placeholder="A short description of the post"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <ReactQuill
          className="h-[50vh] border-none"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>

        <CldUploadButton onUpload={handleImageUpload} uploadPreset="xopezhiy" className="mt-12 mb-6 w-full h-60 bg-slate-100 grid place-items-center border-2 border-dotted relative">
            <div className="flex flex-col items-center">
              <CiImageOn className="w-16 h-16 text-slate-400"/>
              <span className="font-semibold text-slate-600">Upload image</span>
            </div>
        {
          imgUrl && (
            <Image src={imgUrl} alt={"upload image"} fill  className="absolute inset-0 object-cover"/>
          )
        }
        </CldUploadButton>

      <select
        className="mt-12 w-full bg-slate-100 py-2 px-1 rounded-md outline-none"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories &&
          categories.map((cat) => (
            <option key={cat.id} value={cat.label}>
              {cat.label}
            </option>
          ))}
      </select>
      <button className="px-3 py-1 bg-blue-600 text-white font-semibold rounded-sm hover:opacity-80 mt-4">
        Post
      </button>
    </form>
  );
}
