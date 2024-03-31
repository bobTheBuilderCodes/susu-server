"use client";

import React from "react";

import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  return (
    <div onClick={()=>router.back()} className=" flex bg-gray-300 text-gray-700 w-12 h-12 justify-center items-center rounded-full">
      <LeftOutlined  className="text-2xl font-black " />
    </div>
  );
};

export default Navigation;
