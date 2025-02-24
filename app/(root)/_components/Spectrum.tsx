"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { SiGoogleappsscript } from "react-icons/si";
import { LiaGoogleWallet } from "react-icons/lia";
import { SiGooglebigtable } from "react-icons/si";
import { useState } from "react";
import { Menulist } from "./menulist";

const Spectrum = () => {
  const [entering, setEnterring] = useState(false);
  const [entering2, setEnterring2] = useState(false);
  const [entering3, setEnterring3] = useState(false);

  return (
    <div className="px-3 w-full h-full flex flex-col flex-grow pt-10">
      <div className="grid lg:grid-cols-2 w-full h-full">
        <div className="space-y-5 flex flex-col px-3">
          <h1 className="text-2xl">Full-Spectrum Solutions</h1>

          <p className="text-sm ">
            We are specialists in our field, able to offer clients full-spectrum
            sustainability strategy through to project delivery support. This
            enables us to help clients tackle the greatest sustainability
            challenges they face today.
          </p>
          <div className="underline text-md w-[18rem] space-y-2 hover:text-green-700 hover:scale-110 duration-500 ease-in-out transition-transform flex justify-between">
            <Link href="/">Learn more about our process </Link>
            <MdArrowOutward className="size-4" />
          </div>
        </div>
        <div className="w-full h-full justify-end lg:flex relative hidden ">
          <div className="px-3 flex items-center  justify-center w-[24rem] h-[8rem]  space-x-4 rounded-full bg-green-900/30 relative">
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering
                  ? " justify-center group flex bg-yellow-500  w-[6rem] scale-110 transition-colors duration-500  "
                  : " flex w-[6rem] justify-center"
              }`}
            >
              <SiGoogleappsscript className=" text-white size-10  transition-transform  group-hover:" />
            </div>
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering2
                  ? " justify-center group flex bg-red-500  w-[6rem] scale-110 transition-colors duration-500  "
                  : " flex w-[6rem] justify-center"
              }`}
            >
              <LiaGoogleWallet className="size-10 text-white " />
            </div>
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering3
                  ? " justify-center group flex bg-indigo-500  w-[6rem] scale-110 transition-colors duration-500 "
                  : " flex w-[6rem] justify-center"
              }`}
            >
              <SiGooglebigtable className="size-10 text-white" />
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div className="grid space-x-3 gap-4 lg:grid-cols-3  pt-10 px-4 w-full h-full">
        <div
          onMouseEnter={() => setEnterring(true)}
          onMouseLeave={() => setEnterring(false)}
          className={`"w-full h-full flex "${
            entering
              ? "  group  flex flex-col w-full h-full "
              : "flex flex-col w-full h-full "
          }`}
        >
          <h1 className="  text-lg underline font-bold lg:text-xl">Strategy and Performance </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
            <Menulist title="Pixel Pulse" description=" A deep dive into the latest in digital art, design trends, and creative tech innovations." 
            title2="EcoEdge" description2="Exploring cutting-edge solutions and inspiring stories in sustainability and green living."
            title3="MindScope" description3="Bite-sized insights on psychology, mental health, and personal growth for everyday life."
            />
          </div>
        </div>
        <div
          onMouseEnter={() => setEnterring2(true)}
          onMouseLeave={() => setEnterring2(false)}
          className={`"w-full h-full flex"${
            entering2
              ? " flex-col w-full h-full group transition-colors flex group duration-500 "
              : "flex text-black flex-col w-full h-full"
          }`}
        >
          <h1 className=" underline text-lg font-bold lg:text-xl">Sustability and Challenges </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
           <Menulist title="CodeCraft" description=" Quick tips, tutorials, and insights on coding, development trends, and tech innovation." 
            title2="Finance Fix" description2="Exploring cutting-edge solutions and inspiring stories in sustainability and green living."
            title3="Future Feast" description3="Exploring food trends, futuristic recipes, and culinary innovations from around the world."
           />
          </div>
        </div>
        <div
          onMouseEnter={() => setEnterring3(true)}
          onMouseLeave={() => setEnterring3(false)}
          className={`" w-full h-full flex"${
            entering3
              ? " flex-col w-full h-full group transition-colors flex group duration-500 "
              : "flex  flex-col w-full h-full"
          }`}
        >
          <h1 className=" underline text-lg lg:text-xl font-bold">Project Delivery </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
           <Menulist  title="Urban Vibes" description="A snapshot of city life, covering trends in fashion, culture, and modern living." 
            title2="GameGrid" description2="tay ahead in the gaming world with news, reviews, and pro tips for every level."
            title3="Zen Zone" description3="Your daily dose of mindfulness, relaxation techniques, and mental wellness strategies."
         />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spectrum;
