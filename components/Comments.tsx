"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { CommentType } from "@/app/post/[postSlug]/page";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

type TComment = { comments: CommentType[]; postSlug: string };

const Comments = ({ comments, postSlug }: TComment) => {
  const { data: session } = useSession();

  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  
  const router = useRouter()

  const handleComment = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`api/comment/${postSlug}`, {
        commentText,postSlug
      });
      if (response) {
        console.log(response);
        setLoading(false);
        toast.success("Comment added");
        setCommentText("");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };


  return (
    <div>
      {/* COMMENT FORM */}
      <form>
        <h2 className="mb-6 font-bold text-2xl">Comments</h2>
        {session ? (
          <>
            <textarea
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-3 border-[1px] h-[150px] focus:outline-none"
              placeholder="Leave a comment"
            ></textarea>
            {loading ? (
              <button
                className="mt-3 px-3 py-1 border-[2px] font-medium disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              >
                Please wait...
              </button>
            ) : (
              <button
                disabled={commentText === "" && true}
                onClick={handleComment}
                className="mt-3 px-3 py-1 border-[2px] font-medium"
              >
                Comment
              </button>
            )}
          </>
        ) : (
          <div>Log in to add a comment</div>
        )}
      </form>
      <hr className="mt-6 mb-6" />
      {/* COMMENTS */}
      <section>
        {comments?.length > 0 ? (
          comments.map((comment) => {
            //TO FORMAT DATE
            const dateObject = new Date(comment.createdAt);
            const options: Intl.DateTimeFormatOptions = {
              month: "short",
              day: "numeric",
              year: "numeric",
            };

            const formattedDate = dateObject.toLocaleDateString(
              "en-US",
              options
            );

            return (
              <article key={comment.id}>
                <div className="flex items-center">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
                    <Image
                      fill
                      src={comment.user.image || ""}
                      alt="profile image"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{comment.user.name}</h3>
                    <small className="font-medium opacity-70">
                      {formattedDate}
                    </small>
                  </div>
                </div>
                <p className="opacity-85 mt-2">{comment.content}</p>
                <hr className="mt-4" />
              </article>
            );
          })
        ) : (
          <p>Be the first to comment</p>
        )}
      </section>
    </div>
  );
};

export default Comments;
