import MotionOpacity from "@/shared/components/motion-opacity";
import React from "react";
import Info from "../components/info";
import Career from "../components/career";
import Activity from "../components/activity";

export default function AboutView() {
  return (
    <MotionOpacity className="flex flex-col min-h-screen pt-10 px-4 sm:px-6 gap-32 mb-40">
      <Info />
      <hr className="relative block border-none h-10 before:content-['*_*_*'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-gray-300 before:text-xl before:font-normal" />
      <Career />
      <Activity />
    </MotionOpacity>
  );
}
