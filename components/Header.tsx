"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-slate-50  relative shadow-md shadow-slate-200 ">
      <div className="h-full z-50 flex items-center justify-between w-[90%] mx-auto ">
        <div className="flex items-center gap-x-2">
          <Image src="/icons/logo.svg" alt="logo" width={50} height={50} />
          {/* <h1 className="text-primary font-bold text-4xl">ResumeBuilder</h1> */}
        </div>
        <div className="hidden md:flex items-center gap-x-2">
          <Button className="bg-gradient text-lg w-[200px]">Sign Up</Button>
          <Button className="text-gradient border border-primary text-lg w-[200px]">
            Login
          </Button>
        </div>
        <Image
          src="/icons/menu.svg"
          className="md:hidden"
          alt="menu"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;
