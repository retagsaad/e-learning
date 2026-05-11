"use client";
import Image from "next/image";
import { courses } from "@/data";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import React, { use, useState } from "react";
import Buy from "@/components/Buy";
export default function Course({ params }) {
  const { id } = use(params);
  const course = courses.find((course) => course.id == Number(id));
  if (!course) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
      </div>
    );
  }
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <div>
        <div className="">
          <div className="md:flex justify-center items-center gap-10">
            <Image
              src={course.image}
              width={300}
              height={200}
              alt="course"
              className="rounded-xl md:w-120 mb-5 md:mb-0 shadow-xl cursor-pointer hover:scale-105 transition "
            />
            <div className="leading-8">
              <h1 className="text-2xl font-bold">{course.title}</h1>
              <h3 className="md:w-65 w-80">{course.description}</h3>
              <div className="flex items-center gap-3">
                <Image
                  src={"/person.png"}
                  width={40}
                  height={30}
                  className="rounded-3xl"
                  alt="person"
                />
                <div className="">
                  <h3 className="font-bold">{course.instructor}</h3>
                  <p className="text-gray-600 text-sm">{course.role}</p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="flex items-center justify-center">
                  <FaStar className="text-yellow-600 w-5" />
                  <p className="text-yellow-600 font-bold">{course.rating}</p>
                </div>
                <p className="text-gray-500">({course.students})</p>
              </div>
              <div>
                <h1 className="font-bold text-3xl my-3">${course.price}</h1>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white p-4 rounded-xl w-full cursor-pointer hover:bg-indigo-800"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {open && <Buy setOpen={setOpen} course={course} />}
        </div>
        <div className="mt-10 md:mt-20 text-center">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold text-xl ">Course Content</h1>
            <Link
              href={`/courses/${course.id}`}
              className="text-indigo-700 font-medium hover:underline"
              onClick={() => setOpen(true)}
            >
              Enroll Now
            </Link>
          </div>
          <div className="grid rounded-xl border border-gray-400 bg-indigo-100 mb-10">
            {course.lessons.map((lesson, i) => (
              <div
                key={i}
                className=" hover:bg-indigo-200 rounded-xl transition font-medium p-4 border-b border-b-gray-300 cursor-pointer"
              >
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
