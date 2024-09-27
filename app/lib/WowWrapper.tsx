"use client";
// -- TYPE
import { FC, ReactNode } from "react";
// -- WOW HOOK
import useWow from "../hooks/useWow";

const WowWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  // # INIT WOW
  useWow();
  // # RENDER CHILDREN
  return <>{children}</>;
};

export default WowWrapper;
