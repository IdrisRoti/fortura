"use client"

import Image from "next/image";
import { useSession } from "next-auth/react";

const Comments = () => {
  const { data: session } = useSession();

  return (
    <div>
      {/* COMMENT FORM */}
      <form>
        <h2 className="mb-6 font-bold text-2xl">Comments</h2>
        {session ? (
          <>
            <textarea
              className="w-full p-3 border-[1px] h-[150px] focus:outline-none"
              placeholder="Leave a comment"
            ></textarea>
            <button className="mt-3 px-3 py-1 border-[2px] font-medium">
              Submit
            </button>
          </>
        ) : (
          <div>Log in to add a comment</div>
        )}
      </form>
      <hr className="mt-6 mb-6" />
      {/* COMMENTS */}
      <section>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Paul Runner</h3>
              <small className="font-medium opacity-70">3 minutes ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            porro.
          </p>
          <hr className="mt-4" />
        </article>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Adam Lahm</h3>
              <small className="font-medium opacity-70">25 minutes ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            dolorum rem cum vitae ipsa accusantium!
          </p>
          <hr className="mt-4" />
        </article>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Paul Runner</h3>
              <small className="font-medium opacity-70">3 minutes ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            porro.
          </p>
          <hr className="mt-4" />
        </article>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Paul Runner</h3>
              <small className="font-medium opacity-70">3 minutes ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            porro.
          </p>
          <hr className="mt-4" />
        </article>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Paul Runner</h3>
              <small className="font-medium opacity-70">3 minutes ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae sunt quibusdam reprehenderit. Molestiae, ducimus!
            Repellendus deserunt incidunt facere minus?
          </p>
          <hr className="mt-4" />
        </article>
        <article>
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2">
              <Image
                fill
                src={"/sport.jpg"}
                alt="profile image"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Paul Runner</h3>
              <small className="font-medium opacity-70">2 hours ago</small>
            </div>
          </div>
          <p className="opacity-85 mt-2">Lorem ipsum dolor sit amet.</p>
          <hr className="mt-4" />
        </article>
      </section>
    </div>
  );
};

export default Comments;
