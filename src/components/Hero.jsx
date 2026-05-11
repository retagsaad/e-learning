"use client";
import React, { useState } from "react";
import Image from "next/image";
import { courses } from "@/data";
import Link from "next/link";

export default function Hero() {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log(search);
  };

  const filterCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="md:flex justify-center items-center gap-10 px-5">
      <div className="relative">
        <h1 className="font-bold text-3xl xl:text-5xl w-50 md:w-120 md:mt-10 leading-10 md:leading-13 mb-5">
          Learn New Skills Anytime,
          <span className="text-indigo-700"> Anywhere</span>
        </h1>

        <p className="leading-7 md:w-70 text-lg text-gray-500">
          Explore thousands of courses and start your learning journey today.
        </p>

        <div className="md:flex gap-2 md:mt-5 mt-2 relative ">
          <div className="md:flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search for courses..."
              className="p-3 border border-gray-400 rounded-xl mb-3 md:mb-0 md:w-70 "
              value={search}
              onChange={handleInput}
            />
            <button
              onClick={handleSearch}
              className="p-3 text-white bg-indigo-700 rounded-2xl cursor-pointer"
            >
              Search
            </button>
          </div>

          {search.length > 0 && (
            <div className="absolute top-12 left-0 bg-white w-full md:w-70 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {filterCourses.length > 0 ? (
                filterCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="block px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setSearch("")}
                  >
                    {course.title}
                  </Link>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-gray-500">
                  No courses found
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src={"/study.png"}
          width={400}
          height={400}
          alt="studying"
          className="sm:w-140"
        />
      </div>
    </div>
  );
}
