"use client"

import Navigation from "@/components/feature/Navigation";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface GroupDetailsBannerProps {
  groupName: string;
  createAt: string;
  imageUrl?: string;
}

const GroupDetailsBanner: React.FC<GroupDetailsBannerProps> = ({
  groupName,
  createAt,
  imageUrl,
}) => {
  const backgroundImageUrl =
    "https://i.pinimg.com/originals/6f/97/0f/6f970f2d85ee588b8b524071727c0e36.jpg";
  return (
    <>
      <div
        className="relative text-white pb-10 pt-6 px-6 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('${backgroundImageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
          <Navigation />
       

        <div className="flex mt-6 text-center justify-center items-start space-x-4">
          <div>
            <p className="text-2xl font-semibold">{groupName}</p>
            <p className="text-sm mt-2">{`Created on ${createAt}`}</p>
            <p className="mt-9 py-2 font-semibold text-gray-300 border-2 bg-black border-gray-900 px-8 rounded-lg">
              {" "}
              Request to Join{" "}
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default GroupDetailsBanner;
