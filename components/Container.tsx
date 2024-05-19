import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <section className="w-[90%] md:w-[90%] mx-auto">{children}</section>;
};

export default Container;
