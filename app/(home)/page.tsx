import Container from "@/components/Container";
import InfiniteCards from "@/components/InfiniteCards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div> */}

        <div className="flex flex-col w-full h-full gap-y-4 ">
          <h1 className="text-[50px] font-bold r text-gray-900">
            The Ultimate <br />{" "}
            <span className="text-gradient">Resume Builder</span>
          </h1>
          <p className="text-[20px] font-normal text-gray-700 r">
            Build beautiful, recruiter-tested resumes in a few clicks! Our
            resume builder is powerful and easy to use, with a range of amazing
            functions. Custom-tailor resumes for any job within minutes.
            Increase your interview chances and rise above the competition.
          </p>
          <div className="w-full  flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4">
            <Button className="w-full !bg-gradient text-slate-50 text-xl">
              Start for Free
            </Button>
            <Button className="w-full !bg-transparent border border-primary text-gradient  text-xl">
              Login
            </Button>
          </div>
          <InfiniteCards />
        </div>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-full object-center rounded-lg shadow-xl "
        />
      </div>
    </>
  );
};

export default HomePage;
