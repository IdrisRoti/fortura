"use client";

import { useState, useEffect } from "react";
// import ThemeSwitch from "./ThemeSwitch";

import { IoIosArrowDown } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
// import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";

export type catType = {
  id: string;
  label: string;
};

export default function Navbar() {
  const [openCats, setOpenCats] = useState(false);
  const [categories, setCategories] = useState<catType[]>([]);

  const getCategories = async () => {
      await axios
        .get("/api/category")
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between fixed left-0 right-0 top-0 z-[999] backdrop-blur-[30px] items-center sm:py-2 md:px-8 px-2 py-2 dark:bg-slate-900">
      <div className="flex items-center">
        <span className="font-semibold text-blue-600 text-2xl">
          <Link href={"/"}>fortura</Link>
        </span>
        <span
          className="md:hidden flex items-center ml-4 text-slate-400 font-semibold cursor-pointer transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          onClick={() => setOpenCats((prev) => !prev)}
        >
          categories <IoIosArrowDown />
        </span>
        {
          // CATEGORIES LIST FOR MOBILE
          openCats && (
            <ul className="absolute overflow-hidden  top-8 left-[150px] w-[200px] bg-white shadow-md rounded-lg ">
              {categories &&
                categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="p-2 w-full hover:bg-slate-100 transition cursor-pointer capitalize"
                  >
                    {cat.label}
                  </li>
                ))}
            </ul>
          )
        }
        {/* CATEGORIES LIST FOR BIG SCREENS */}
        <ul className="md:flex hidden gap-4 items-center font-semibold ml-8 transition">
          {categories &&
            categories.map((cat) => (
              <li
                key={cat.id}
                className="hover:opacity-100 opacity-70 cursor-pointer capitalize transition text-sm"
              >
                {cat.label}
              </li>
            ))}
        </ul>
      </div>
      {/* THEME SWITCH BUTTON */}
      {/* <div className="ml-auto mr-4 cursor-pointer"><ThemeSwitch /></div> */}
      {status === "authenticated" && (
        <Link
          href={"/create-post"}
          className="px-3 py-1 border-[1px] rounded-md ml-auto mr-2 hover:opacity-70 font-semibold"
        >
          Create
        </Link>
      )}
      {/* SIGN IN BUTTON */}
      <div>
        {status === "authenticated" && (
          <div className="flex items-center">
            <button
              className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition"
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <Image
              className="ml-2 rounded-full"
              alt="profile image"
              src={session?.user?.image || ""}
              width={32}
              height={32}
            />
          </div>
        )}
        {/* {
                    status === "loading" && (
                        <button disabled className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"><span className="mr-2"><FcGoogle /></span> Please wait...</button>
                    )
                } */}
        {status === "unauthenticated" && (
          <button
            onClick={() => signIn("google")}
            className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition flex items-center justify-between"
          >
            <span className="mr-2">
              <FcGoogle />
            </span>{" "}
            Sign in
          </button>
        )}
      </div>
      {/* <span className="sm:hidden text-2xl cursor-pointer dark:text-white"><AiOutlineMenu /></span> */}
    </nav>
  );
}
