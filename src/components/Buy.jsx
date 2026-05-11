"use client";
import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Image from "next/image";
import { FaCcVisa } from "react-icons/fa6";
import { HiCreditCard } from "react-icons/hi";
import { RiBankCardFill } from "react-icons/ri";
import { FiLock } from "react-icons/fi";

export default function Buy({ course, setOpen }) {
  if (!course) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
      <div className="bg-white shadow-2xl p-6 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center md:ml-5">
          <h1 className="font-bold text-2xl mb-5 mt-0.5">
            Complete your purchase
          </h1>
          <button
            className="text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine />
          </button>
        </div>
        <div className="md:flex gap-15 md:ml-5">
          <div className="leading-15">
            <Image
              src={course.image}
              width={400}
              height={300}
              alt="course"
              className="rounded-2xl"
            />
            <h1 className="font-semibold text-xl mt-4">{course.title}</h1>
            <div className="flex items-center gap-2">
              <Image
                src={"/person.png"}
                width={30}
                height={20}
                className="rounded-3xl"
                alt="person"
              />
              <h3 className="text-gray-500">{course.instructor}</h3>
            </div>
            <h1 className="font-bold text-2xl">${course.price}</h1>
          </div>
          <div className="">
            <h1 className="font-bold text-xl my-2">Payment Details</h1>
            <div className="flex flex-col relative my-3">
              <label htmlFor="card" className="text-gray-700">
                Card Number
              </label>
              <div className="flex items-center">
                <FaCcVisa className="text-gray-600 absolute right-2 top-8.5 text-lg" />
                <RiBankCardFill className="text-gray-600 absolute not-visited:right-14 top-8.5 text-lg" />
                <HiCreditCard className="text-gray-600 absolute right-8 top-8.5 text-xl" />
              </div>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="p-2 border border-gray-400 rounded-lg md:pr-25 "
              />
            </div>
            <div className="flex flex-row gap-3 my-3">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-gray-700">
                  Expiry Date
                </label>

                <input
                  type="text"
                  placeholder="MM / YY"
                  className="p-2 border border-gray-400 rounded-lg  md:w-40"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cvc" className="text-gray-700">
                  CVC
                </label>

                <input
                  type="text"
                  placeholder="CVC"
                  className="p-2 border border-gray-400 rounded-lg md:w-40 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="Enter name..."
                className="p-2 border border-gray-400 rounded-lg  "
              />
            </div>
            <button className="flex items-center gap-2 justify-center bg-indigo-600 text-white p-4 rounded-xl w-full cursor-pointer hover:bg-indigo-800">
              <FiLock /> Pay ${course.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
