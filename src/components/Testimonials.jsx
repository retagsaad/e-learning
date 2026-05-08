import { testimonials } from "@/data";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Testimonials() {
  return (
    <div className="my-10">
      <div className="md:flex md:gap-2 xl:gap-10 justify-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="my-5 bg-indigo-100 p-4 rounded-xl shadow-xl sm:w-85"
          >
            <div className="flex gap-2">
              <Image
                src={testimonial.image}
                width={35}
                height={35}
                alt="user"
                className="rounded-4xl"
              />
              <div className="">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex my-4 text-lg">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="w-75">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
