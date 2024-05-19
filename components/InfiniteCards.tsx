"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const companies: string[] = [
  "/icons/vercel.svg",
  "/icons/trello.svg",
  "/icons/meta.svg",
  "/icons/insta.svg",
  "/icons/slack.svg",
  "/icons/figma.svg",
  "/icons/github.svg",
  "/icons/whatsapp.svg",
  "/icons/spotify.svg",
  "/icons/twitter.svg",
  "/icons/snapchat.svg",
  "/icons/linkedin.svg",
];

const InfiniteCards = () => {
  return (
    <div className="  rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <InfiniteMovingCards items={companies} direction="right" speed="normal" />
    </div>
  );
};

export default InfiniteCards;
