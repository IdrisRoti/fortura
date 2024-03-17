"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <button
        className="flex items-center gap-2 font-semibold opacity-70 hover:bg-slate-100 px-3 py-2 rounded-full transition mt-2 disabled:opacity-35 disabled:cursor-not-allowed"
      >
        <FaArrowLeft /> Previous
      </button>
      <button className="flex items-center gap-2 font-semibold opacity-70 hover:bg-slate-100 px-3 py-2 rounded-full transition mt-2 disabled:opacity-35 disabled:cursor-not-allowed">
        Next <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
