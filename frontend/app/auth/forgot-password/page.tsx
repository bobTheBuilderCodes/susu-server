"use client";

import AppButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input
              label="Email"
              placeholder="Enter your email"
              value=""
              onChange={() => {}}
              name=""
            />

            <AppButton title="Send Reset Instructions" type="submit" />
          </form>

          <p className="mt-10 text-center text-gray-500">
            Remember password?{" "}
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
