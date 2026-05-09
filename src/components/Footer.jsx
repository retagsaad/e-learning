import { footerData } from "@/data";
import React from "react";
import Link from "next/link";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="p-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex gap-4 items-center">
              <img
                src="https://img.icons8.com/fluency/48/graduation-cap.png"
                alt="cap"
              />
              <h1 className="font-bold text-2xl">
                <Link href={"/"}>Learnly</Link>
              </h1>
            </div>

            <p className="max-w-xs my-5 text-gray-200">
              Learn new skills anytime, anywhere with Learnly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {footerData.map((data) => (
              <div key={data.id} className="flex flex-col gap-3">
                <h1 className="font-bold">{data.title}</h1>

                {data.links.map((link, index) => (
                  <p
                    key={index}
                    className="cursor-pointer text-gray-300 hover:text-white transition"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-400 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-200 text-center md:text-left">
            Copyright 2024 Learnly, All rights reserved.
          </p>

          <div className="flex text-xl gap-4">
            <SlSocialFacebook className="hover:text-gray-300 cursor-pointer transition" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer transition" />
            <CiLinkedin className="hover:text-gray-300 cursor-pointer transition" />
            <CiTwitter className="hover:text-gray-300 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </div>
  );
}
