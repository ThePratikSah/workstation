import React from "react";
import Button from "./Button";

function About() {
  return (
    <div className="bg-neutral text-neutral-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden p-10 md:p-20">
      <div className="relative flex max-w-[100rem] flex-col items-center justify-center xl:flex-row xl:gap-20">
        <div className="relative z-[1] w-full py-10">
          <h2 className="font-title justify-start font-black leading-none xl:text-start">
            <span className="inline-block text-[clamp(2rem,8vw,3.6rem)] font-black will-change-auto"></span>{" "}
            <br />{" "}
            <span className="inline-block text-[clamp(2rem,8vw,3rem)] font-light">
              Who We Are?
            </span>
          </h2>{" "}
          <div className="h-10"></div>{" "}
          <p className="text-neutral-content/60 font-title inline-block w-full justify-start font-light md:text-2xl">
            Unleash Potential. Craft Dream Workspaces. We Design. You Thrive.
          </p>{" "}
          <div className="h-10"></div>{" "}
          <div className="flex w-full justify-start">
            <Button style="" title={"Get Free Quote"} />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default About;
