import Footer from "@/components/Footer";
import { courses } from "@/data";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
export default function CoursesPage() {
  return (
    <div>
      <div>
        <div>
          <h1>All Courses</h1>
          <p>Showing 9 courses</p>
        </div>
        <div className="md:flex  justify-center gap-20 ">
          {courses.map((course) => (
            <div
                key={course.id}
                className="bg-indigo-100  shadow-2xl w-80 rounded-2xl  mt-5 cursor-pointer"
              >
            <Link href={"/${course.id}"}>
                <Image
                  alt="course"
                  src={course.image}
                  width={100}
                  height={100}
                  className="w-full rounded-t-2xl object-cover h-50"
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
