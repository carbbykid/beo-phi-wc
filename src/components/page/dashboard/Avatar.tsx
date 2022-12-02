import Image from "next/image";
import React from "react";

const Avatar = ({ url, active }: { url: string; active?: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-full rounded-full relative border-2 ${
        active ? "border-green-400" : "border-white"
      }`}
    >
      <Image src={url} className="rounded-full" layout="fill" />
      {/* <Image
        src={"/images/home/avatar_beo.jpg"}
        className="rounded-full"
        layout="fill"
      /> */}
    </div>
  );
};

export default Avatar;
