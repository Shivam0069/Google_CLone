"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TiMicrophoneOutline } from "react-icons/ti";
export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    router.push(`search/web?searchTerm=${data}`);
    setRandomSearchLoading(false);
    //   .then((res) => res.json())
    //   .then((data) => data[0]);
    // if (!response) return;
    // router.push(`search/web?searchTerm=${response}`);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <IoIosSearch className="text-xl text-gray-500 mr-3 " />

        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />

        <TiMicrophoneOutline className="text-lg" />
      </form>

      <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              className="h-6 text-center "
              src="spinner.svg"
              alt="Loading.."
            />
          ) : (
            " I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
