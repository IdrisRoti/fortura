"use client";

import React from "react";
import { PostType } from "./Posts";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostCard = ({ postData, key }: { postData: PostType; key: string }) => {
  const router = useRouter();

  //TO FORMAT DATE
  const dateObject = new Date(postData.createdAt);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <article className="md:mt-0" key={key}>
        <div className="w-full h-[200px] relative">
          <Image
            alt={postData?.title}
            src={postData?.imgUrl || "@/default-image.jpg"}
            className="object-cover"
            fill
          />
        </div>
      <div className="mt-4">
        <div className="text-blue-600 flex items-center text-sm">
          <span>{postData?.user?.name}</span>
          <div className="w-1 h-1 rounded full bg-blue-600 mx-2"></div>
          <span>{formattedDate}</span>
        </div>
        <Link href={`/post/${postData?.slug}`}>
          <div className="flex items-center text-2xl justify-between font-bold mt-3">
            <h2>{postData?.title}</h2>
            <GoArrowUpRight />
          </div>
        </Link>
        <p className="opacity-80 mb-3 text-sm">{postData?.description}</p>
        <span
          className="font-bold px-2 py-1 bg-red-100 rounded-full dark:bg-red-300 cursor-pointer dark:text-slate-800 text-xs"
          onClick={() => router.push(`/category?cat=${postData?.catName}`)}
        >
          {postData?.catName}
        </span>
      </div>
    </article>
  );
};

export default PostCard;
