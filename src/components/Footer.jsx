import { footerData } from "@/data";
import React from "react";
import Link from "next/link";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="bg-indigo-600 w-full text-white">
      <div className="p-5">
        <div className="md:flex gap-70">
          <div className="md:ml-20">
            <div className="flex gap-4  items-center">
              <img
                src="https://img.icons8.com/fluency/48/graduation-cap.png"
                alt="cap"
              />
              <h1 className="font-bold text-2xl">
                <Link href={"/"}>Learnly</Link>
              </h1>
            </div>
            <p className="w-50 my-5">
              Learn new skills anytime, anywhere with learnly.
            </p>
          </div>
          <div className="md:flex gap-15">
            {footerData.map((data) => (
              <div key={data.id} className="flex gap-3 flex-col">
                <h1 className="font-bold">{data.title}</h1>

                {data.links.map((link, index) => (
                  <p
                    key={index}
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="text-gray-500 w-full my-5" />
        <div className="flex justify-between">
          <p>CopyRight 2024 Learnly,All rights reserved.</p>
          <div className="flex text-xl gap-2">
            <SlSocialFacebook />
            <FaInstagram />
            <CiLinkedin />
            <CiTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
