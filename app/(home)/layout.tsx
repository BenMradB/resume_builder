import Container from "@/components/Container";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-14  bg-dot-primary/[0.3] relative">
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default HomeLayout;
