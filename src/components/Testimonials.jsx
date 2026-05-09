import { testimonials } from "@/data";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="my-12 px-5 md:px-10">
      <h1 className="font-bold text-2xl text-center mb-8">
        What our students say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-indigo-100 p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex gap-3 items-center">
              <Image
                src={testimonial.image}
                width={40}
                height={40}
                alt="user"
                className="rounded-full"
              />

              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex my-3 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>

            <p className="text-gray-700 text-sm leading-6">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
