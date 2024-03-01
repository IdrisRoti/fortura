// "use client"

// import React from 'react'
// import { useState, useEffect } from 'react'

// import { MdSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";


// type ThemeType = "light" | "dark";

// const ThemeSwitch = () => {
//   const [theme, setTheme] = useState<ThemeType>("light");


//   const toggleTheme = () => {
//     if(theme === "light"){
//       setTheme("dark")
//       if(typeof window !== "undefined" && window.localStorage){
//       localStorage.setItem("theme", "dark")
//     }
//     document.documentElement.classList.add("dark");
//     }else{
//       setTheme("light")
//       if(typeof window !== "undefined" && window.localStorage){
//       localStorage.setItem("theme", "light")
//       document.documentElement.classList.remove("dark");
//     }
//   }

  
//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("theme") as ThemeType | null;
//     if(localTheme){
//       setTheme(localTheme)
//     } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
//       setTheme("dark")
//       document.documentElement.classList.add("dark");
//     }
//   }, [])
  

//   return (
//     <div onClick={toggleTheme} className='dark:text-white'>
//       {
//         theme == "light" ? (
//           <div><MdSunny /></div>
//         ) : (
//           <div><FaMoon /></div>
//         )
//       }
//     </div>
//   )
//     }
// }
// export default ThemeSwitch