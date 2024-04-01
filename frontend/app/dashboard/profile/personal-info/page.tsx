"use client";

import Navigation from "@/components/feature/Navigation";
import AppButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex min-h-full flex-1 flex-col  px-6 lg:px-8 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center">
        <Navigation />
        <h2 className=" text-center text-2xl font-bold leading-9 ml-6 tracking-tight text-gray-900">
          Personal Information
        </h2>
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input
            label="Fullname"
            placeholder="Enter your fullname"
            value="Philomena Potinge"
            onChange={() => {}}
            name=""
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            value="philomena@gmail.com"
            onChange={() => {}}
            name=""
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            value=""
            onChange={() => {}}
            name=""
          />

          <AppButton title="Save Changes" type="submit" />
        </form>
      </div>
    </div>
  );
}
