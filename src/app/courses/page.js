import Footer from "@/components/Footer";
import { courses } from "@/data";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
export default function CoursesPage() {
  return (
    <div className="">
      <div className="md:flex md:gap-10 lg:gap-25 my-10 md:ml-5 lg:ml-15">
        <div>
          <h1 className="font-bold text-xl">All Courses</h1>
          <p className="text-gray-500">Showing 9 courses</p>
          <div className="md:flex gap-2 md:mt-5 mt-2">
            <input
              type="text"
              placeholder="Search for courses..."
              className="p-2 border border-gray-400 rounded-lg mb-3 md:mb-0 md:w-50"
            />
            <button className=" p-2 border-none text-white bg-indigo-700 rounded-2xl cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 justify-center sm:gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-indigo-100  shadow-2xl w-80 rounded-2xl  mt-5 cursor-pointer sm:w-50 md:w-60 xl:w-75"
            >
              <Link href={"/course.id"}>
                <Image
                  alt="course"
                  src={course.image}
                  width={100}
                  height={100}
                  className="w-full rounded-t-2xl object-cover h-50 md:w-xl"
                />
                <div className="p-2 mt-2">
                  <h3 className="font-bold">{course.title}</h3>
                  <h3 className="text-gray-600">{course.instructor}</h3>
                </div>
                <div className="p-2 flex justify-between gap-2">
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar className="" />
                      <h3>{course.rating}</h3>
                    </div>
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
