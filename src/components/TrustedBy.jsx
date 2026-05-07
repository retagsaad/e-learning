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
          <Image alt="google" src={"/google.svg"} width={100} height={100} />
          <Image alt="Amazon" src={"/Amazon.svg"} width={50} height={50} />
          <Image alt="Microsoft" src={"/Microsoft.svg"} width={50} height={50} />
          <Image alt="Netflix" src={"/Netflix.svg"} width={100} height={100} />
          <Image alt="Spotify" src={"/Spotify.svg"} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
