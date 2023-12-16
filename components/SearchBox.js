"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { TiMicrophoneOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function submitHandler(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="border border-gray-200 rounded-full  max-w-3xl shadow-lg items-center transition-shadow flex px-6 py-3 ml-10 mr-5 flex-grow "
    >
      <input
        value={term}
        type="text"
        placeholder="Search Google"
        className=" flex-1 w-full focus:outline-none"
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="m-auto text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />

      <TiMicrophoneOutline className=" hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <IoIosSearch
        className=" text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={submitHandler}
      />
    </form>
  );
}
