import UserGroup from "@/components/feature/UserGroup";
import CreateGroupDrawer from "@/helpers/createGroup";
import { greetUser } from "@/helpers/greetUser";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

const HomeTab = () => {
  const greetingMessage = greetUser();
  return (
    <div className="flex bg-gray-100 p-4 pr-6 flex-col pb-24 min-h-screen">
      <div className="flex items-center text-left py-6 sm:px-4">
        <Avatar
          style={{ backgroundColor: "#111", border: "none" }}
          icon={<UserOutlined />}
          size={55}
          src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
        />
        <div className="ml-3 mr-auto">
          <h1 className="text-2xl font-bold  text-gray-700">
            {" "}
            {greetingMessage}
          </h1>
          <p>Philomena Potinge 🚀 </p>
        </div>

        <Link
          href="/"
          className="text-3xl font-semibold bg-gray-200 p-4 rounded-full w-16 flex items-center justify-center h-16 md:hidden"
        >
          <PoweroffOutlined />
        </Link>
      </div>

      {/* User Groups */}
      <h1 className="font-bold text-lg text-gray-700 mt-4 md:mx-4">
        Your Groups (2)
      </h1>
      <div className="flex flex-wrap justify-start sm:mx-3">
        <UserGroup
          title="Visionaries"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"5"}
        />
        <UserGroup
          title="Savers"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"12"}
        />
      </div>
      <h1 className="font-bold text-lg text-gray-700 mt-12 md:mx-4">
        Recommended Groups (12)
      </h1>

      <div className="flex flex-wrap justify-start sm:mx-3">
        <UserGroup
          title="Squadron"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"7"}
        />
        <UserGroup
          title="Black"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"11"}
        />
        <UserGroup
          title="Articulates"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"9"}
        />
        <UserGroup
          title="Feminists"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"5"}
        />
        <UserGroup
          title="Snipers"
          body="Group of 4 people who are selfless and willing to help each other to realise our goals and aspirations."
          numberOfParticipants={"17"}
        />
      </div>
      <CreateGroupDrawer />
    </div>
  );
};

export default HomeTab;
