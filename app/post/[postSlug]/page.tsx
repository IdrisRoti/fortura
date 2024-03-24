import Comments from "@/components/Comments";
import axios from "axios";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { PostType } from "@/components/Posts";

export type CommentType = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    name: string;
    image?: string;
  };
};

//FETCH SINGLE POST
const getPostData = async (slug: string) => {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`);
  return res.data;
};

//FETCH COMMENTS UNDER POST
const getCommentsData = async (slug: string) => {
  const res = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/comment/${slug}`
  );
  return res.data;
};



const SinglePost = async ({ params }: { params: { postSlug: string } }) => {
  const { postSlug } = params;
  const post: PostType = await getPostData(postSlug);
  const comments = await getCommentsData(postSlug);
  console.log(post);

  //TO FORMAT DATE
  const dateObject = new Date(post.createdAt);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <div className="p-2 md:p-4 max-w-[1200px] mx-auto md:pt-[80px] sm:pt-[100px] pt-[70px]">
      <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
          <Image
            src={post.imgUrl || "/default-image.jpg"}
            className="object-cover"
            fill
            alt="post image"
          />

        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[transparent] w-full h-full">
          <div className="absolute bottom-0 p-4 text-white">
            <h2 className="text-4xl">{post.title}</h2>
            <small className="flex items-center my-2 opacity-80">
              By {post.user.name}{" "}
              <div className="mx-1">
                {formattedDate}
              </div>
            </small>
          </div>
        </div>
      </div>
      <div className="mt-4 blog-content">
        {parse(post.content)}
        <span className="text-sm font-bold px-2 pt-1 pb-1 mt-2 bg-red-100 hover:opacity-70 cursor-pointer rounded-full">
          {post.catName}
        </span>
      </div>
      <hr className="mt-5 mb-6" />
      <Comments comments={comments} postSlug={postSlug}/>
    </div>
  );
};

export default SinglePost;
