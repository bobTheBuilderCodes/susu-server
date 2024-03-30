"use client";

import AppButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";

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
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
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
          className="block text-sm mb-4 leading-6 text-gray-900"
        >
          {"Sign Up As"}
        </label>
              <Radio value={1}>Individual</Radio>
              <Radio value={2}>Group</Radio>
            </Radio.Group>

            <AppButton title="Sign up" type="submit" />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
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
