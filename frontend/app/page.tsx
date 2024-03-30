
import AppButton from "../components/ui/Button";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="">
       <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12 flex flex-col justify-center items-center min-h-[calc(100vh-64px)]">
          <h1 className="text-4xl  sm:text-5xl leading-snug md:text-6xl lg:text-7xl font-black  text-center text-[#101828] mb-4">
            Collective Savings,
            <br />
            Individual Rewards!
          </h1>
          <p className="mt-2 text-md sm:text-xl max-w-3xl p-1 text-center text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </p>
          <div className="mt-8 flex flex-row sm:flex-row justify-center gap-4">
            <Link href={'auth/signup'}>
            <AppButton type="button" title="Create Account" />
            </Link>
            <Link href={'auth/signin'}>
            <AppButton type="button" title="Log in" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
