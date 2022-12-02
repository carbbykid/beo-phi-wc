import Image from "next/image";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Authentication = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="mr-10 hover:scale-105 duration-200 cursor-default rounded-full flex items-center border-4 w-[70px] h-[70px] md:w-[80px] md:h-[80px] relative">
        <Image
          src={"/images/home/avatar_phi.jpg"}
          className="rounded-full"
          layout="fill"
        />
      </button>
      <FaUserAlt size={40} color="white" />
      <button className="ml-10 hover:scale-105 duration-200 cursor-default border-4 rounded-full flex item-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] relative">
        <Image
          src={"/images/home/avatar_beo.jpg"}
          className="rounded-full"
          layout="fill"
        />
      </button>
    </div>
  );
};

export default Authentication;
