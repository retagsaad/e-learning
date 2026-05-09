import Link from "next/link";
import React from "react";
import Image from "next/image";
import { heroCourses } from "@/data";
import { FaStar } from "react-icons/fa6";

export default function PopularCourses() {
  return (
    <div className="my-10">
      <div className="font-bold flex md:justify-between gap-6 xl:gap-230 xl:px-55">
        <h1>Popular Courses</h1>
        <Link href={"/courses"} className="text-indigo-700 flex-end">
          View All
        </Link>
      </div>
      <div className="md:flex justify-center gap-20 ">
        {heroCourses.map((herocourse) => (
          <div
            key={herocourse.id}
            className="bg-indigo-100  shadow-2xl w-80 rounded-2xl  mt-5 cursor-pointer"
          >
            <Link href={`/courses/${herocourse.id}`}>
              <Image
                alt="course"
                src={herocourse.image}
                width={100}
                height={100}
                className="w-full rounded-t-2xl object-cover h-50"
              />
              <div className="p-2 mt-2">
                <h3 className="font-bold">{herocourse.title}</h3>
                <h3 className="text-gray-600">{herocourse.instructor}</h3>
              </div>
              <div className="p-2 flex justify-between gap-2">
                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar className="" />
                    <h3>{herocourse.rating}</h3>
                  </div>
                  <h3 className="text-gray-500">({herocourse.students})</h3>
                </div>
                <h3>{herocourse.price}$</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
