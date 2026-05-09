"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { courses } from "@/data";
import { TiThMenuOutline } from "react-icons/ti";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filterCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-10 relative">
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-4 items-center">
          <img
            src="https://img.icons8.com/fluency/48/graduation-cap.png"
            alt="cap"
          />
          <h1 className="font-bold text-2xl">
            <Link href={"/"}>Learnly</Link>
          </h1>
        </div>

        <ul className="hidden lg:flex gap-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-5 relative">
          <FaSearch className="text-gray-600 absolute left-3" />

          <input
            type="text"
            placeholder="Search for courses..."
            className="p-2 border border-gray-400 rounded-lg pl-10"
            onChange={handleInput}
          />

          {search.length > 0 && (
            <div className="absolute top-12 bg-white w-70 rounded-md shadow-md z-50">
              {filterCourses.length > 0 ? (
                filterCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="block px-3 py-2 text-sm hover:bg-gray-100"
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

          <MdOutlineShoppingCart className="text-2xl cursor-pointer" />

          <Image
            src="/user.png"
            alt="user"
            width={30}
            height={30}
            className="rounded-full cursor-pointer"
          />
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          <TiThMenuOutline />
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-5 z-50">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/courses" onClick={() => setOpen(false)}>
            Categories
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>

          <div className="relative">
            <FaSearch className="text-gray-600 absolute left-3 top-3" />

            <input
              type="text"
              placeholder="Search for courses..."
              className="p-2 border border-gray-400 rounded-lg pl-10 w-full"
              onChange={handleInput}
            />

            {search.length > 0 && (
              <div className="bg-white mt-2 rounded-md shadow-md">
                {filterCourses.length > 0 ? (
                  filterCourses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="block px-3 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setOpen(false)}
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

          <div className="flex gap-5 items-center">
            <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
            <Image
              src="/user.png"
              alt="user"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
