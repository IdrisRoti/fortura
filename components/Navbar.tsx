"use client"

import {useState} from "react";
// import ThemeSwitch from "./ThemeSwitch";

import { IoIosArrowDown } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
// import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar () {
    const [openCats, setOpenCats] = useState(false);

    const {data:session, status} = useSession()
    
    return (
        <nav className="flex justify-between fixed left-0 right-0 top-0 z-[999] backdrop-blur-[30px] items-center sm:py-2 md:px-8 px-2 py-2 dark:bg-slate-900">
            <div className="flex items-center">
                <span className="font-semibold text-blue-600 text-2xl"><Link href={"/"}>fortura</Link></span>
                <span className="md:hidden flex items-center ml-4 text-slate-400 font-semibold cursor-pointer transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" onClick={() => setOpenCats(prev => !prev)}>categories <IoIosArrowDown /></span>
                {
                    // CATEGORIES LIST FOR MOBILE
                    openCats && (
                        <ul className="absolute overflow-hidden  top-8 left-[150px] w-[200px] bg-white shadow-md rounded-lg ">
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Coding</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Design</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Art</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Management</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Music</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">Sport</li>
                            <li className="p-2 w-full hover:bg-slate-100 transition cursor-pointer">creativity</li>
                        </ul>
                    )
                }
                {/* CATEGORIES LIST FOR BIG SCREENS */}
                <ul className="md:flex hidden gap-4 items-center font-semibold ml-8 text-slate-400 transition dark:text-slate-300 dark:hover:text-white">
                    <li className="hover:text-slate-900 cursor-pointer transition">Technology</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">Design</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">Art</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">Culture</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">Music</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">Humor</li>
                    <li className="hover:text-slate-900 cursor-pointer transition">creativity</li>
                </ul>
            </div>
            {/* THEME SWITCH BUTTON */}
            {/* <div className="ml-auto mr-4 cursor-pointer"><ThemeSwitch /></div> */}
            {status === "authenticated" && <Link href={"/create-post"} className="px-3 py-1 border-[1px] rounded-md ml-auto mr-2 hover:opacity-70 font-semibold">Create</Link>}
            {/* SIGN IN BUTTON */}
            <div>
                {status === "authenticated" && (
                    <div className="flex items-center">
                        <button className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition" onClick={()=>signOut()}>Sign out</button>
                        <Image className="ml-2 rounded-full" alt= "profile image" src={session?.user?.image || ""} width={32} height={32}/>
                    </div>
                )}
                {/* {
                    status === "loading" && (
                        <button disabled className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"><span className="mr-2"><FcGoogle /></span> Please wait...</button>
                    )
                } */}
                {
                    status=== "unauthenticated" && (
                        <button onClick={()=> signIn("google")} className="py-1 px-3 rounded-md font-semibold hover:opacity-70 border-[1px] transition flex items-center justify-between"><span className="mr-2"><FcGoogle /></span> Sign in</button>
                    )
                }
            </div>
            {/* <span className="sm:hidden text-2xl cursor-pointer dark:text-white"><AiOutlineMenu /></span> */}
    </nav>
    )
}