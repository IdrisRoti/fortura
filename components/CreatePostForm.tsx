"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { catType } from "./Navbar";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CreatePostForm() {
  const [categories, setCategories] = useState<catType[]>([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  // const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState(""); //from cloudinary
  const [publicId, setPublicId] = useState(""); //required to delete image on cloudinary when a post is deleted

  const router = useRouter();

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

  const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info as Object;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setImgUrl(url);
      setPublicId(public_id);
    }
  };

  const removeImage = () => {
    console.log("Clicked")
    axios
      .post("/api/removeImage", { publicId })
      .then((data) => {
        console.log(data);
        setPublicId(""),
        setImgUrl("");
        toast.success("Image removed!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to remove image!");
      });
  };

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !value || !description) {
      toast("Titie, description and Content are required!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/posts", {
        title,
        value,
        category,
        imgUrl,
        publicId,
        description,
      });
      if (response) {
        console.log(response);
        setLoading(false);
        toast.success("post created");
        setValue("")
        setTitle("")
        setDescription("")
        setCategory("")
        router.push("/")
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
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

      <CldUploadButton
        onUpload={handleImageUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        className={`mt-12 mb-2 w-full h-60 bg-slate-100 grid place-items-center border-4 border-slate-800 border-dotted relative ${
          imgUrl && "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center">
          <CiImageOn className="w-16 h-16 text-slate-400" />
          <span className="font-semibold text-slate-600">Upload image</span>
        </div>
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={"upload image"}
            fill
            className="absolute inset-0 object-cover"
          />
        )}
      </CldUploadButton>

      {publicId && (
          <span
            onClick={removeImage}
            className="px-3 py-1.5 bg-gray-800 text-xs text-white rounded mb-4 cursor-pointer hover:opacity-60 z-10"
          >
            Change image
          </span>
        )}

      <select
        className="mt-8 w-full bg-slate-100 py-2 px-1 rounded-md outline-none"
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
      {loading ? (
        <button
          disabled
          className="px-3 py-1 bg-blue-600 text-white font-semibold rounded-lg hover:opacity-80 mt-4 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Creating Post
        </button>
      ) : (
        <button className="px-3 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:opacity-80 mt-2">
          Create Post
        </button>
      )}
    </form>
  );
}
