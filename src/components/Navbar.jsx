import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
function Navbar() {
  return (
    <div className="z-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <img
            src="https://img.icons8.com/fluency/48/graduation-cap.png"
            alt="cap"
          />
          <h1 className="font-bold text-2xl"><Link href={"/"}>Learnly</Link></h1>
        </div>
        <ul className="flex gap-7">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link href={"/"}>Categories</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
        </ul>
        <div className="flex justify-between gap-5 items-center">
          <div className="relative flex items-center">
            <FaSearch className="text-gray-600 absolute left-3" />
            <input
              type="text"
              placeholder="Search for courses..."
              className="p-2 border border-gray-400 rounded-lg pl-10"
            />
          </div>
          <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
          <Image src="/user.png" alt="user" width={40} height={40} className="rounded-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
