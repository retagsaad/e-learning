"use client";

import Footer from "@/components/Footer";
import { courses } from "@/data";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

export default function CoursesPage() {
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
    <div className="">
      <div className="md:flex md:gap-10 lg:gap-25 my-10 md:ml-5 lg:ml-15">
        <div>
          <h1 className="font-bold text-xl">All Courses</h1>

          <p className="text-gray-500">Showing {courses.length} courses</p>

          <div className="md:flex gap-2 md:mt-5 mt-2 relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="p-2 border border-gray-400 rounded-lg mb-3 md:mb-0 md:w-50 w-full"
              value={search}
              onChange={handleInput}
            />

            <button
              className="p-2 text-white bg-indigo-700 rounded-2xl cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </button>

            {search.length > 0 && (
              <div className="absolute top-12 bg-white w-full md:w-50 rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 justify-center sm:gap-5">
          {filterCourses.map((course) => (
            <div
              key={course.id}
              className="bg-indigo-100 shadow-2xl w-80 rounded-2xl mt-5 cursor-pointer sm:w-50 md:w-60 xl:w-75"
            >
              <Link href={`/courses/${course.id}`}>
                <Image
                  alt="course"
                  src={course.image}
                  width={600}
                  height={400}
                  className="w-full h-50 object-cover rounded-t-2xl hover:scale-105 transition"
                />

                <div className="p-2 mt-2">
                  <h3 className="font-bold">{course.title}</h3>
                  <h3 className="text-gray-600">{course.instructor}</h3>
                </div>

                <div className="p-2 flex justify-between gap-2">
                  <div className="flex gap-2 items-center text-yellow-500">
                    <FaStar />
                    <h3>{course.rating}</h3>
                    <h3 className="text-gray-500">({course.students})</h3>
                  </div>

                  <h3>{course.price}$</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
