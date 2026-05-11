import Link from "next/link";
import React from "react";
import Image from "next/image";
import { heroCourses } from "@/data";
import { FaStar } from "react-icons/fa6";

export default function PopularCourses() {
  return (
    <div className="my-12 px-5 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-xl md:text-2xl">Popular Courses</h1>

        <Link
          href={"/courses"}
          className="text-indigo-700 font-medium hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {heroCourses.map((herocourse) => (
          <div
            key={herocourse.id}
            className="bg-indigo-100 shadow-lg hover:scale-105 transition duration-300 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl "
          >
            <Link href={`/courses/${herocourse.id}`}>
              <Image
                alt="course"
                src={herocourse.image}
                width={600}
                height={400}
                className="w-full h-48 object-cover "
              />

              <div className="p-3">
                <h3 className="font-bold">{herocourse.title}</h3>
                <p className="text-gray-600 text-sm">{herocourse.instructor}</p>
              </div>

              <div className="p-3 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-yellow-500">
                  <FaStar />
                  <span>{herocourse.rating}</span>
                  <span className="text-gray-500">({herocourse.students})</span>
                </div>

                <h3 className="font-bold">{herocourse.price}$</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
