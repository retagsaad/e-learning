import React from "react";
import Image from "next/image";
export default function TrustedBy() {
  return (
    <div className="hidden md:block mb-10">
      <div>
        <h1 className="font-bold text-center mt-20 mb-10">
          Trusted by 50.000+ companies worldwide
        </h1>
        <div className="flex gap-20 justify-center">
          <Image src={"/google.svg"} width={100} height={100} />
          <Image src={"/Amazon.svg"} width={50} height={50} />
          <Image src={"/Microsoft.svg"} width={50} height={50} />
          <Image src={"/Netflix.svg"} width={100} height={100} />
          <Image src={"/Spotify.svg"} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
