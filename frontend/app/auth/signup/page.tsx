"use client";

import AppButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import Image from "next/image";

export default function SignUp() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Free Account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input
              label="Fullname"
              placeholder="Philomena Potinge"
              value=""
              onChange={() => {}}
              name=""
            />
            <Input
              label="Email"
              placeholder="philomena.potinge@gmail.com"
              value=""
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
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value=""
              onChange={() => {}}
              name=""
            />
            <Radio.Group onChange={onChange} value={value}>
              <label
                htmlFor={"Sign up as"}
                className="block text-sm mb-4 font-semibold leading-6 text-gray-700"
              >
                {"Sign Up As"}
              </label>
              <Radio value={1}>
                <p className="text-lg">Individual</p>
              </Radio>
              <Radio value={2}>
                {" "}
                <p className="text-lg">Group</p>
              </Radio>
            </Radio.Group>

            <AppButton title="Sign up" type="submit" isPrimary={true} />
          </form>

          <p className="mt-10 text-center text-gray-500">
            Already a member?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
