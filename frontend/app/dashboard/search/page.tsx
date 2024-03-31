"use client";
import RecentSearch from "@/components/feature/RecentSearch";
import AppButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import React from "react";

const SearchTab = () => {
  return (
    <div className="bg-gray-100 min-h-screen sm:mx-auto sm:w-full sm:max-w-sm px-6">
      <form className="space-y-6" action="#" method="POST">
        <input className="bg-white p-3 w-full mt-9"
          placeholder="Search groups by name"
          type="search"
          value=""
          onChange={() => {}}
          name=""
        />
      </form>
      
      <h1 className="font-bold text-lg text-gray-700 mt-12">Recent Searches</h1>

      <RecentSearch title="Savings and Loans" />
      <RecentSearch title="Feminist Group" />
      <RecentSearch title="Men of Valor Group" />
    </div>
  );
};

export default SearchTab;
