import React from 'react'
import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:flex justify-center items-center">
        <div>
          <h1 className="font-bold text-3xl xl:text-5xl w-50 md:w-120 md:mt-10 leading-10 md:leading-13 mb-5">
            Learn New Skills Anytime, 
            <span className="text-indigo-700"> Anywhere</span>
          </h1>
          <p className="leading-7 md:w-70 text-lg text-gray-500">Explore thousands of courses and start your learning journey today.</p>
          <div className="md:flex gap-2 md:mt-5 mt-2">
           <input
              type="text"
              placeholder="Search for courses..."
              className="p-2 border border-gray-400 rounded-lg mb-3 md:mb-0 md:w-70"
              />
              <button className=" p-3 border-none text-white bg-indigo-700 rounded-2xl cursor-pointer">Search</button>
            </div>
        </div>
        <div>
          <Image
            src={"/study.png"}
            width={300}
            height={300}
            alt="studying"
            className="sm:w-140"
          />
        </div>
      </div>
  )
}
